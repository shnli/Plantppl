import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

export default function IndexNavbar() {
  return (
    <div className='absolute left-0 right-0 bg-white font-Mont text-xs lg:text-md font-semibold'>
      <div className='flex items-center justify-between px-12 lg:px-24 py-4'>
        <div className='font-Barrio text-darkgreen text-xl'>
          Plant People
        </div>
        <div className='flex gap-4'>
            <div className='flex justify-center px-8 py-2 rounded-full bg-darkgreen text-white'>
                Log In
            </div>
            <div className='flex justify-center px-8 py-2 rounded-full border-[1px] border-darkgreen text-darkgreen'>
                Sign Up
            </div>
        </div>
      </div>
    </div>
  )
}

