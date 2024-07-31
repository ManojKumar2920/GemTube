// components/ProtectedRoute.js or utils/withAuth.js
"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase'; // Adjust the import path based on your project structure

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push('/'); // Redirect to login page if not authenticated
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // You can add a loader here
  }

  if (!isAuthenticated) {
    return null; // You can add a fallback UI here
  }

  return <>{children}</>;
};

export default ProtectedRoute;
