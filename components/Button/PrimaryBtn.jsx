import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ href, children }) => {
  return (
    <div>
      <Link href={href} className=" p-2 rounded-lg border border-slate-600">{children}</Link>
    </div>
  );
};

export default PrimaryBtn;
