'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import ProtectedRoute from '@/components/ProtectedRoutes/ProtectedRoutes';

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
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch transcription');
      }

      const data = await response.json();
      setTranscription(data.transcription);
    } catch (error) {
      setError('Error: ' + error.message);
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
