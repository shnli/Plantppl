import Link from "next/link"
import SideNavbar from "../../components/Navbars/sideNavbar"
import TicketsNavbar from "../../components/Tickets/ticketsNavbar"

export default function NurseryIndex(){
    return(
        <div>
            <SideNavbar></SideNavbar>
            <div className="px-2 py-4 sm:ml-64 font-Mont">
                <div className="border-2 border-gray-200 border-dashed min-h-[700px] rounded-lg px-4 ">
                    <TicketsNavbar></TicketsNavbar>
                    Main Menu
                </div>
            </div>
        </div>
    )
}