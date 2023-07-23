import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import IndexNavbar from '../components/Navbars/indexNavbar'
import Footer from '../components/Navbars/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <div className="w-full gradient-bg h-screen">
        <IndexNavbar></IndexNavbar>

        <div className='flex justify-center items-center h-full px-12 md:px-24 lg:px-36 font-Mont text-white md:text-lg lg:text-xl text-md'>
          
          <div className='flex lg:flex-row flex-col justify-center lg:gap-24 md:gap-18 gap-12'>
            
            <div className='flex flex-col justify-center lg:text-start text-center gap-8'>
              <div className='font-Barrio text-2xl md:text-5xl lg:text-8xl linear-wipe'>
                Plant People
              </div>
              <div>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
              </div>
              <div className='flex lg:justify-start justify-center gap-4'>
                <Link href="/about">
                  <div className='flex justify-center items-center text-center px-8 py-2 border-[1px] rounded-full text-xs hover:bg-white hover:text-darkgreen'>
                    About Us
                  </div>
                </Link>
                <Link href="/User/userIndex">
                  <div className='flex justify-center items-center text-center px-8 py-2 border-[1px] rounded-full text-xs hover:bg-white hover:text-darkgreen'>
                    BETA USER
                  </div>
                </Link>
                <Link href="/Nursery/nurseryIndex">
                  <div className='flex justify-center items-center text-center px-8 py-2 border-[1px] rounded-full text-xs hover:bg-white hover:text-darkgreen'>
                    BETA NURSERY
                  </div>
                </Link>
              </div>
            </div>

            <div className='flex justify-center'>
              <img src="/plant.png" alt="..." className="lg:max-w-[550px] md:max-w-[300px] max-w-[200px] px-4 lg:px-0 lg:pl-12 cursor-pointer rounded align-middle" />
            </div>

          </div>

        </div>
        <div className='absolute bottom-0'>
          <Footer></Footer>
        </div>

    </div>
    </>
  )
}

