// app/components/GoogleAnalytics.js
"use client";
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load the Google Analytics script
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
