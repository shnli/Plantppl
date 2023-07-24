import Link from "next/link"
import UserMobileNavbar from "@/components/User/userMobileNavbar"
import LogComponent from "@/components/User/Garden/LogComponent"

export default function MyLogs(){
    return(
        <div className="flex flex-col justify-center items-center font-Mont pb-24 gap-2 md:gap-4 py-4 lg:py-6">
            
            <Link href="/User/userIndex" className='absolute top-4 md:top-8 lg:top-10 left-4 md:left-12 flex-col justify-center items-center  hover:underline'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </Link>

            <div className="text-md md:text-2xl font-bold linear-wipe1">
                My Logs
            </div>
            <hr className="flex md:hidden w-full border-darkgreen opacity-30"></hr>
            <div className="flex flex-col w-full md:w-[500px] md:gap-4">
                <LogComponent></LogComponent>
                <LogComponent></LogComponent>
            </div>
            <UserMobileNavbar></UserMobileNavbar>

        </div>
    )
}