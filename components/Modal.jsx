
"use client"

import React from "react";

const Modal = ({ showModal, setShowModal, handleSubmit, email, setEmail }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-1/3 md:w-[80%]">

        <button
          onClick={() => setShowModal(false)}
          className="text-black float-right"
        >
          X
        </button>

        <h2 className="text-2xl mb-4">Join the Waitlist</h2>

        <p className=" text-sm text-slate-500 mb-2">When we launch, you will receive first access to GemTube!</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border rounded-md"
          />

          <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded-lg">
            Submit
          </button>
        </form>

        <p className=" text-sm text-slate-500 mt-4">Thanks for the support!</p>
      </div>
    </div>
  );
};

export default Modal;
