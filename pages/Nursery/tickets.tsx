import Link from "next/link"
import SideNavbar from "../../components/Navbars/sideNavbar"
import TicketsNavbar from "../../components/Tickets/ticketsNavbar"
import Tickets from "../../components/Tickets/tickets"

export default function ViewTickets(){
    return(
        <div>
            <SideNavbar></SideNavbar>
            <div className="px-2 py-4 sm:ml-64 font-Mont">
                <div className="border-2 border-gray-200 border-dashed min-h-[700px] rounded-lg px-2 lg:px-4 ">
                    <TicketsNavbar></TicketsNavbar>
                    <Tickets></Tickets>
                </div>
            </div>
        </div>
    )
}