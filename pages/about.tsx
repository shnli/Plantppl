import type { NextPage } from 'next';
import Link from 'next/link';
import IndexNavbar from '../components/Navbars/indexNavbar';
import Footer from '../components/Navbars/footer';

export default function About() {
  return (
    <div className="w-full gradient-bg h-screen">
      <IndexNavbar></IndexNavbar>
      <div className='flex flex-col justify-center items-center h-full px-12 md:px-24 lg:px-36 font-Mont text-white md:text-lg lg:text-xl text-md text-center gap-4 lg:gap-8'>
        <div className="font-Right text-2xl md:text-4xl lg:text-5xl ">
          About Plant People
        </div>
        <div className="max-w-prose pb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod consectetur felis, vel finibus ipsum dapibus sit amet. Nullam quis consectetur velit. Sed tristique tellus in orci efficitur, id vestibulum purus consectetur. Etiam eu felis quam. Vivamus eget risus tincidunt, laoreet odio eu, viverra ligula. Integer ut lacus vel purus feugiat bibendum.
          </p>

        </div>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <div className="flex justify-center items-center text-center px-8 py-2 border-[1px] rounded-full text-xs hover:bg-white hover:text-darkgreen cursor-pointer">
              BETA USER
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-center items-center text-center px-8 py-2 border-[1px] rounded-full text-xs hover:bg-white hover:text-darkgreen cursor-pointer">
              BETA NURSERY
            </div>
          </Link>
        </div>
    
      </div>


      <div className='absolute bottom-0'>
          <Footer></Footer>
    </div>

    </div>
  );
};

