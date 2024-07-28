import React from 'react';
import Link from 'next/link';

const SecondaryBtn = ({href, children}) => {
  return (
    <div>
      <Link
        href={href}
        className=" px-7 py-3 text-lg rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 transition ease-in-out duration-300 text-white"
      >
        {children}
      </Link>
    </div>
  )
}

export default SecondaryBtn