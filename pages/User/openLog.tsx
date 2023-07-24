import UserLogNavbar from "@/components/User/userLogNavbar"
import PhotoLog from "@/components/User/Garden/Log/photoLog"
import ReplyLog from "@/components/User/Garden/Log/replyLog"
import TicketLog from "@/components/User/Garden/Log/ticketLog"
import Link from "next/link"
import UserMobileNavbar from "@/components/User/userMobileNavbar"

export default function OpenLogs(){
    return(
        <div className="flex flex-col justify-center items-center font-Mont gap-4 pb-24">
            <UserLogNavbar></UserLogNavbar>

            <div className="flex flex-col pt-24 md:pt-36 px-8 gap-6">
                <PhotoLog></PhotoLog>
                <TicketLog></TicketLog>
                <ReplyLog></ReplyLog>
            </div>

            <div className="text-xs opacity-40">
                --You Are Up to Date--
            </div>

            <Link href="/" className='flex flex-row justify-center items-center border-[1px] border-darkgreen px-8 py-4 max-w-[300px] md:max-w-[400px] rounded-full gap-2 bg-white font-semibold'>
                <div className="flex justify-center items-center text-center text-sm text-dargreen">Want Nursery Advice?</div>
            </Link>

            <Link href="#" className='flex flex-row justify-center items-center max-w-[300px] md:max-w-[400px] rounded-full hover:underline'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                </svg>
                <div className="flex justify-center items-center text-center text-xs  text-dargreen">Top</div>
            </Link>
            <UserMobileNavbar></UserMobileNavbar>

        </div>
    )
}