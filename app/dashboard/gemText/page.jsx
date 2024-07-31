import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import ProtectedRoute from '@/components/ProtectedRoutes/ProtectedRoutes';
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
        <DashboardLayout>
            <p>Gem Text</p>
        </DashboardLayout>
    </ProtectedRoute>
  )
}

export default page;