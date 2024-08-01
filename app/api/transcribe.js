import { SpeechClient } from '@google-cloud/speech';
import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import { runCors } from '../../lib/cors'; // Import the CORS helper

const upload = multer({ dest: 'uploads/' });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry, something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('audio'));

// Apply CORS middleware
apiRoute.use(async (req, res, next) => {
  await runCors(req, res, next);
});

apiRoute.post(async (req, res) => {
  try {
    const fileName = req.file.path;
    const file = fs.readFileSync(fileName);
    const audioBytes = file.toString('base64');

    const client = new SpeechClient();
    const request = {
      audio: { content: audioBytes },
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
      },
    };

    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    fs.unlinkSync(fileName); // Clean up the temporary file
    res.status(200).json({ transcription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
