import Image from 'next/image'
import GardenPlant from '@/components/User/Garden/gardenPlant'
import UserMobileNavbar from '@/components/User/userMobileNavbar'
export default function userIndex(){
    return(
        <>

            <div className="flex flex-col font-Mont p-8 text-darkgreen text-md lg:text-2xl md:text-xl gap-4 lg:py-12 lg:gap-8 mb-24">
                <div className="font-bold linear-wipe1 text-xl lg:text-6xl md:text-3xl">
                    Welcome Home, Firstname
                </div>

                <div className="flex items-center gradient-bgSmall min-h-[100px] rounded-lg shadow-md border-darkgreen border-2 lg:border-4 border-dashed border-opacity-40 py-4 md:px-8 px-4">
                    <div className='flex items-center justify-start gap-4 md:gap-8 md:w-3/4 md:px-8'>
                        <div className="flex justify-center items-center">
                            <img src="/nature.png" alt="..." className="rounded-full shadow-lg max-w-[80px] md:max-w-[90px] lg:max-w-[120px]"
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='font-bold text-white opacity-90'>
                                THANKS FOR JOINING US
                            </div>
                            <div className='flex items-center text-sm lg:text-lg md:text-md lg:gap-4 text-white opacity-90 '>
                                <div>
                                    Your customized plant care journey begins here. Contact your nursery today!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-end md:w-1/4 md:px-4 md:py-2 lg:px-16 lg:py-4 rounded-xl shadow-md border-2 border-darkgreen border-opacity-20'>
                        <img src="/flowers.png" className='max-w-[150px] lg:max-w-[200px]'>
                        </img>
                    </div>
                </div>
                
                <div className='flex items-center justify-between rounded-full border-2 px-4 lg:px-8 py-1 border-darkgreen border-opacity-30'>
                    <div className='font-semibold text-darkgreen text-lg lg:text-2xl md:text-xl opacity-80'>
                        MY GARDEN
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 opacity-80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </div>

                <GardenPlant></GardenPlant>
                <GardenPlant></GardenPlant>
                <GardenPlant></GardenPlant>
                <GardenPlant></GardenPlant>
                <GardenPlant></GardenPlant>
                <GardenPlant></GardenPlant>

            </div>

            <UserMobileNavbar></UserMobileNavbar>
            
        </>
    )
}