import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GemTubeLogo from '@/assets/gemtube-logo.png'
import PrimaryBtn from '../Button/PrimaryBtn';

const Nav = () => {
  return (
    <div>
        <div className=' flex w-full justify-between px-10 py-6'>
            <div className=' flex items-center justify-center gap-1'>
                <Image src={GemTubeLogo} width={40}></Image>
                <h1 className=' text-xl font-bold'>GemTube</h1>
            </div>
            <div className=' w-[40%] flex justify-between text-sm'>
                <Link href={"/"} className='  ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg'>Features</Link>
                <Link href={"/"} className='  ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg'>FAQs</Link>
                <Link href={"/"} className='  ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg'>Support</Link>
                <Link href={"/"} className= '  ease-linear transition hover:bg-gray-200 duration-300 p-2 rounded-lg'>Contribute</Link>
            </div>
            <div>
                <PrimaryBtn href={"/"} children={"Sign in"} />
            </div>
        
        </div>
    </div>
  )
}

export default Nav