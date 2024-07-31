// services/authService.js
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/app/firebase"; // Adjust the import path based on your project structure

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Return the user object
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
