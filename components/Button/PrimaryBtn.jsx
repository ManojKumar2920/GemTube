import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ href, children }) => {
  return (
    <div>
      <Link
        href={href}
        className=" px-4 py-2 text-sm rounded-lg border border-slate-600 hover:bg-slate-900 transition ease-in-out duration-300 hover:text-white"
      >
        {children}
      </Link>
    </div>
  );
};

export default PrimaryBtn;
