// app/firebase.js
'use client'

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth"; // Import Auth and GoogleAuthProvider
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const analytics = typeof window !== "undefined" && getAnalytics(app); // Ensure it's only called in the browser
const auth = getAuth(app); // Initialize Auth
const googleProvider = new GoogleAuthProvider(); // Initialize Google Auth Provider

export { db, analytics, auth, googleProvider,signOut }; // Export auth and googleProvider
