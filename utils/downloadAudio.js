import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';

const downloadAudio = (url, output) => {
  return new Promise((resolve, reject) => {
    const audioStream = ytdl(url, { filter: 'audioonly' });

    ffmpeg(audioStream)
      .audioBitrate(128)
      .save(output)
      .on('end', () => {
        console.log('Audio downloaded and saved to', output);
        resolve(output);
      })
      .on('error', (err) => {
        console.error('Error downloading audio:', err);
        reject(err);
      });
  });
};

export default downloadAudio;
