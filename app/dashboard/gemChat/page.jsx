// app/dashboard/gemChat/page.jsx

'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import ProtectedRoute from '@/components/ProtectedRoutes/ProtectedRoutes';
import ytdl from 'ytdl-core';
import axios from 'axios';
import { FFmpeg } from '@ffmpeg/ffmpeg';

const ChatPage = () => {
  const [url, setUrl] = useState('');
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Step 1: Download audio using ytdl-core
      const audioStream = ytdl(url, { filter: 'audioonly' });
      const chunks = [];

      audioStream.on('data', chunk => chunks.push(chunk));
      audioStream.on('end', async () => {
        const audioBlob = new Blob(chunks, { type: 'audio/mp3' });

        // Initialize FFmpeg
        const ffmpeg = new FFmpeg();
        await ffmpeg.load();

        try {
          // Step 2: Process audio with ffmpeg
          ffmpeg.FS('writeFile', 'audio.mp3', await audioBlob.arrayBuffer());
          await ffmpeg.run('-i', 'audio.mp3', 'output.wav');
          const data = ffmpeg.FS('readFile', 'output.wav');

          // Step 3: Convert Blob to Base64
          const audioBase64 = Buffer.from(data).toString('base64');

          // Step 4: Send Base64 audio to a transcription service
          const response = await axios.post('YOUR_TRANSCRIPTION_API_URL', {
            audio: audioBase64,
          });

          setTranscription(response.data.transcription);

        } catch (ffmpegError) {
          // Handle ffmpeg processing error
          setError(`Error processing audio: ${ffmpegError.message}`);
        } finally {
          // Clean up ffmpeg resources
          ffmpeg.FS('unlink', 'audio.mp3');
          ffmpeg.FS('unlink', 'output.wav');
        }
      });

      audioStream.on('error', (downloadError) => {
        setError(`Error downloading audio: ${downloadError.message}`);
        setLoading(false);
      });

    } catch (error) {
      setError('Error: ' + error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-4">
          <h1 className="text-2xl font-bold">YouTube Audio to Text</h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Enter YouTube URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mt-2"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Convert'}
            </button>
          </form>
          {transcription && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Transcription:</h2>
              <p>{transcription}</p>
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-500">
              <p>{error}</p>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default ChatPage;
