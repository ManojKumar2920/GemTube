import Image from 'next/image';
import React from 'react';
import GemTubeLogo from '@/assets/gemtube-logo.png'
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="border-t p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  md:gap-6 justify-between items-center px-6 border-b pb-6">
          <div className="text-center flex items-center justify-center md:text-left mb-4 md:mb-0">
            <Image src={GemTubeLogo} width={40}></Image><span className="text-xl font-bold">GemTube</span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row items-center">
            <Link href="/#comingsoon" className=" hover:text-white mx-2">Features</Link>
            <Link href="/#comingsoon" className=" hover:text-white mx-2">FAQs</Link>
            <Link href="/#comingsoon" className=" hover:text-white mx-2">Support</Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">© 2024 GemTube. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
