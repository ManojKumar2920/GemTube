'use client'
import React, { useState } from 'react';
import Nav from '@/components/Home/NavBar/Nav';
import Hero from '@/components/Home/Hero/Hero';
import Modal from '@/components/Modal';
import { db } from '@/app/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Toaster, toast } from 'sonner';

const ModalLayout = () => {
    const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "emails"), {
        email: email,
        timestamp: new Date(),
      });
      setShowModal(false);
      toast.success("Successfully joined the waitlist!");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to join the waitlist. Please try again.");
    }
  };
  return (
    <div>
        <Nav setShowModal={setShowModal} />
        <Hero setShowModal={setShowModal} />
        <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
      <Toaster richColors position="top-center" />
    </div>
  )
}

export default ModalLayout