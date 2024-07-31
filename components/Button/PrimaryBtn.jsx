import Link from "next/link";
import React from "react";

const PrimaryBtn = ({   children, onClick, className  }) => {
  return (
    <div>
      <button
      onClick={onClick} 
        className={`${className} px-4 py-2 text-sm rounded-lg border border-slate-600 hover:bg-slate-900 transition ease-in-out duration-300 hover:text-white`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
