import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import IndexNavbar from '../components/indexNavbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <IndexNavbar></IndexNavbar>
      <div className='h-full bg-darkgreen'>
        <div className='flex justify-center items-center h-full bg-darkgreen px-12 lg:px-36 font-Mont text-white lg:text-xl text-lg'>
          
          <div className='flex lg:flex-row flex-col justify-center lg:gap-24 gap-12'>
            
            <div className='flex flex-col justify-center lg:text-start text-center gap-8'>
              <div className='font-Barrio text-5xl lg:text-8xl'>
                Plant People
              </div>
              <div>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
              </div>
              <div className='flex justify-center'>
                <div className='flex justify-center items-center text-center  py-2 border-[1px] rounded-full'>
                  About Us
                </div>`
              </div>
            </div>
            <img src="/plant.png" alt="..." className="lg:max-w-[600px] px-12 cursor-pointer rounded align-middle" />
          </div>
        </div>
        <Footer></Footer>

      </div>

    </div>
  )
}

