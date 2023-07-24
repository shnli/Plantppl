import React from 'react';
import Link from 'next/link';
export default function UserLogNavbar(){
  return (
        <nav className="fixed top-0 flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-md lg:py-4 text-md md:text-2xl font-Mont bg-white">
            <div className="flex w-full flex-wrap items-center justify-between px-4 md:px-12 py-1">
                
                <div className='flex gap-8'>
                    <Link href="/User/myLogs" className='flex flex-col justify-center items-center  hover:underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </Link>

                    <Link href="/User/myLogs" className='flex flex-col justify-center'>
                        <div className='font-bold'>Plant Type</div>
                        <div className="text-sm md:text-lg text-dargreen">Plant Name</div>
                    </Link>
                </div>

                <Link href="/" className='flex flex-row justify-center items-center border-[1px] px-4 py-2 max-w-[150px] md:max-w-[200px] rounded-full gap-2 bg-darkgreen text-white font-semibold hover:bg-white hover:text-darkgreen'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div className="flex justify-center items-center text-center text-[10px] lg:text-sm text-dargreen">Contact Expert</div>
                </Link>

            </div>
        </nav>
  )
};

