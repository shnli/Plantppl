import type { NextPage } from 'next'
import Link from 'next/link'

export default function IndexNavbar() {
  return (
    <div className='absolute left-0 right-0 bg-white bg-opacity-80 font-Mont text-xs md:text-sm lg:text-md font-semibold'>
      <div className='flex items-center justify-between px-4 lg:px-24 py-2'>
        <Link href="/">
            <div className='font-Barrio text-darkgreen md:text-lg lg:text-xl'>
            Plant People
            </div>
        </Link>
        <div className='flex gap-4'>
            <Link href= "/Authentication/login">
                <div className='flex justify-center px-4 py-2 rounded-full bg-darkgreen opacity-80 hover:opacity-100 border-[1px] border-darkgreen text-white '>
                    Log In
                </div>
            </Link>
            <Link href = "/Authentication/signup">
                <div className='flex justify-center px-4 py-2 rounded-full border-[1px] border-darkgreen hover:bg-white hover:bg-opacity-80 text-darkgreen'>
                    Sign Up
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

