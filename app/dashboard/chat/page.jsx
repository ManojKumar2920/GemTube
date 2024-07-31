import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import ProtectedRoute from '@/components/ProtectedRoutes/ProtectedRoute';
import React from 'react';

const ChatPage = () => {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <p>Chat</p>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default ChatPage;
