import { NextResponse } from 'next/server';
import downloadAudio from '@/utils/downloadAudio';
import convertAudioToText from '@/utils/convertAudioToText';
import path from 'path';
import fs from 'fs';

export async function POST(request) {
  const { url } = await request.json();
  const audioPath = path.resolve('./public/audio.mp3');

  try {
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    await downloadAudio(url, audioPath);
    const transcription = await convertAudioToText(audioPath);
    fs.unlinkSync(audioPath); // Clean up audio file after transcription
    return NextResponse.json({ transcription });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
