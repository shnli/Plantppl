
import UserMobileNavbar from "@/components/User/userMobileNavbar"
import Link from "next/link"
import ContactExpertButton from "@/components/User/Buttons/contactExpertButton"
import ViewLogButton from "@/components/User/Buttons/viewLogButton"

export default function PlantProfile(){
    return(
        <div className="font-Mont text-darkgreen pb-24">
            <Link href="/User/userIndex" className='absolute top-4 md:top-8 lg:top-10 left-4 md:left-12 flex-col justify-center items-center  hover:underline'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </Link>

            <div className="flex flex-col justify-center items-center pt-16">
                <div className="flex flex-col items-center bg-white border-darkgreen border-opacity-20 border-[1px] w-[350px] md:w-[500px] min-h-[300px] rounded-lg shadow-md pt-8 pb-16 gap-4">
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-24 h-24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-semibold">
                                Plant Name
                            </div>
                            <div className="">
                                Plant Type
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">

                        <div className="flex justify-between text-xs">
                            <div className="font-semibold">
                                Nursery of Origin
                            </div>
                            <div className="text-[10px]">
                                Adopted: MM/DD/YYYY
                            </div>
                        </div>

                        <div className='flex flex-col justify-start items-start border-[1px] border-darkgreen w-[310px] md:w-[420px] md:max-w-[420px] min-h-[100px] rounded-md bg-white  text-xs'>
                            <div className="w-full overflow-hidden gradient-bgSmall p-1">
                                <div className="flex justify-between">
                                    <div className="font-semibold text-white">
                                        Watering Schedule
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-3 h-3">
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                    </svg>

                                </div>
                            </div>
                            <div className="p-4">
                                This is my watering schedule for my plant. 
                            </div>
                        </div>

                        <div className='flex flex-col justify-start items-start border-[1px] border-darkgreen w-[310px] md:w-[420px] md:max-w-[420px] min-h-[100px] rounded-md bg-white  text-xs'>
                            <div className="w-full overflow-hidden gradient-bgSmall p-1">
                                <div className="flex justify-between">
                                    <div className="font-semibold text-white">
                                        Notes
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-3 h-3">
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                    </svg>

                                </div>
                            </div>
                            <div className="p-4">
                                These are my plant notes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed vulputate odio, nec ornare eros. Mauris sagittis hendrerit venenatis. Vestibulum ac ipsum sit amet neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed vulputate odio, nec ornare eros. Mauris sagittis hendrerit venenatis. Vestibulum ac ipsum sit amet neque.
                            </div>
                        </div>

                        <div className="flex items-center flex-col gap-2">
                            <div className="text-[10px]">
                                Want advice from your Nursery? 
                            </div>

                            <div className="border-[1px] border-darkgreen text-xs gradient-bgSmall text-white rounded-full py-2 px-8 w-[310px] md:w-[420px] md:max-w-[420px]">
                                <ContactExpertButton></ContactExpertButton>
                            </div>

                            <div className="flex justify-center text-[10px]">
                                - or -
                            </div>
                            
                            <div className="border-[1px] border-darkgreen text-xs bg-white text-darkgreen rounded-full py-2 px-8 w-[310px] md:w-[420px] md:max-w-[420px]">
                                <ViewLogButton></ViewLogButton>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <UserMobileNavbar></UserMobileNavbar>
        </div>
    )
}