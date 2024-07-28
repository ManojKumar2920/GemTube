import React from "react";
import Image from "next/image";
import UnderDev from "@/assets/under-dev.png"

const ComingSoon = () => {
  return (
    <section id="comingsoon" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-lg text-gray-600 mb-8">
          We're working hard to bring you something amazing. Stay tuned for updates!
        </p>
        <div className="flex justify-center">
          <Image
            src={UnderDev}
            alt="Coming Soon"
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
