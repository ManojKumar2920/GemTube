import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import ProtectedRoute from '@/components/ProtectedRoutes/ProtectedRoutes';
import React from 'react';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <p>Dashboard</p>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default DashboardPage;
