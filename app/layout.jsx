import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GemTube",
  description:
    "GemTube is an innovative platform designed to revolutionize how users interact with video content. By providing automated transcriptions of YouTube videos and an interactive chat interface, GemTube enables users to access and understand video information quickly and efficiently. Ideal for students, educators, and professionals, GemTube saves time and enhances learning by making video content searchable and accessible.",
  keywords: [
    "Youtube video chat",
    "Chat with Youtube Video",
    "Video Transcription",
    "Interactive Chat",
    "YouTube Transcription",
    "Educational Tool",
    "Content Accessibility",
    "AI",
    "Productivity",
    "Learning Enhancement",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
