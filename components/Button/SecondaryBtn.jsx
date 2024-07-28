// components/Button/SecondaryBtn.js
import React from "react";

const SecondaryBtn = ({ href, children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-slate-900 hover:bg-slate-700 text-lg text-white px-4 py-2 rounded-md">
      {children}
    </button>
  );
};

export default SecondaryBtn;
