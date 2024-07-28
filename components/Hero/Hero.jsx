'use client'
import React, { useState } from "react";
import SecondaryBtn from "../Button/SecondaryBtn";
import HeroBanner from "@/assets/hero-banner.jpg";
import Image from "next/image";
import Modal from "../Modal";
import { db } from "@/app/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Toaster, toast } from "sonner";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "emails"), {
        email: email,
        timestamp: new Date(),
      });
      setSubmitted(true);
      setShowModal(false);
      toast.success("Successfully joined the waitlist!");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to join the waitlist. Please try again.");
    }
  };

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
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default Hero;
