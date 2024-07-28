'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GemTubeLogo from '@/assets/gemtube-logo.png';
import PrimaryBtn from '../Button/PrimaryBtn';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className="flex w-full justify-between px-10 py-6 items-center">
        <div className="flex items-center gap-1">
          <Image src={GemTubeLogo} width={40} alt="GemTube Logo" />
          <h1 className="text-xl font-bold">GemTube</h1>
        </div>
        <div className="md:hidden flex w-[40%] justify-between text-sm">
          <Link href={"/#comingsoon"} className="ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg">Features</Link>
          <Link href={"/#comingsoon"} className="ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg">FAQs</Link>
          <Link href={"/#comingsoon"} className="ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg">Support</Link>
          <Link href={"/"} className="ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg">Contribute</Link>
        </div>
        <div className="md:hidden">
          <PrimaryBtn href={"/"} children={"Join Waitlist"} />
        </div>
        <button
          onClick={toggleMenu}
          className="hidden md:flex items-center"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`  fixed inset-0 bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 z-10">
          <button
            onClick={toggleMenu}
            className="self-end mb-4"
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href={"/#comingsoon"} className="py-2 text-gray-800 ">Features</Link>
          <Link href={"/#comingsoon"} className="py-2 text-gray-800 ">FAQs</Link>
          <Link href={"/#comingsoon"} className="py-2 text-gray-800 ">Support</Link>
          <Link href={"/"} className="py-2 text-gray-800 hover:bg-gray-200 rounded-lg">Contribute</Link>
        </div>
        <div className="p-6">
          <PrimaryBtn href={"/"} children={"Join Waitlist"} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
