import React from 'react';
import SecondaryBtn from '../Button/SecondaryBtn';
import HeroBanner from '@/assets/hero-banner.jpg';
import Image from 'next/image';

const Hero = ({ setShowModal }) => {
  return (
    <div className="p-10 w-full flex flex-col items-center justify-center">
      <div className="w-[60%] md:w-[90%] text-center flex flex-col items-center justify-between gap-6">
        <div className="px-4 py-2 rounded-full border bg-slate-50 border-slate-300">
          Introducing GemTube ✨
        </div>
        <h1 className="text-5xl font-bold">Interact with YouTube Video Ease!</h1>
        <p className="text-slate-600 mb-">
          Are you tired of spending hours watching videos to find the
          information you need? With GemTube, you can transform any YouTube
          video into searchable text and get answers instantly through our
          interactive chat interface.
        </p>
        <SecondaryBtn
          href="#"
          children={'Join Waitlist'}
          onClick={() => setShowModal(true)}
        />
      </div>
      <div className="pt-12 w-[90%] md:w-full">
        <Image src={HeroBanner} className="shadow-xl rounded-2xl" alt="Hero Banner" />
      </div>
    </div>
  );
};

export default Hero;
