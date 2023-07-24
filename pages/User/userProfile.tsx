
import UserMobileNavbar from "@/components/User/userMobileNavbar"
import Link from "next/link"

export default function PlantProfile(){
    return(
        <div className="font-Mont text-darkgreen pb-24">
            <Link href="/User/userIndex" className='absolute top-4 md:top-8 lg:top-10 left-4 md:left-12 flex-col justify-center items-center  hover:underline'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </Link>

            <div className="flex flex-col justify-center items-center pt-16">
                <div className="flex flex-col items-center bg-white border-darkgreen border-opacity-20 border-[1px] w-[340px] md:w-[500px] min-h-[300px] rounded-lg shadow-md pt-8 pb-16 gap-8">
                    
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-24 h-24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-semibold">
                                Firstname Lastname
                            </div> 
                            <div className="">
                                Joined Date
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">

                        <div className="flex justify-between text-sm">
                            <div className="font-semibold">
                                Phone Number
                            </div>

                        </div>


                    </div>

                </div>

            </div>

            <UserMobileNavbar></UserMobileNavbar>
        </div>
    )
}