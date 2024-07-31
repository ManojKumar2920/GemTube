import { Whisper } from 'whisper';
import fs from 'fs';

const convertAudioToText = async (audioFile) => {
  try {
    const whisper = new Whisper();
    await whisper.load(); // Load the Whisper model
    const transcription = await whisper.transcribe(fs.createReadStream(audioFile));
    return transcription;
  } catch (error) {
    console.error('Error transcribing audio:', error);
    throw new Error('Failed to transcribe audio');
  }
};

export default convertAudioToText;
