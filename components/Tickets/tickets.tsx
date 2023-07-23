import Link from "next/link";

export default function Tickets(){
    return(
        <div className="h-min-12 rounded border-[1px] bg-white hover:bg-darkgreen hover:bg-opacity-10">
            <div className="flex items-center justify-start p-2 gap-4 text-sm text-darkgreen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>


                <div>
                    <div className="font-bold">
                        Firstname Lastname
                    </div>
                    <div className="font-semibold opacity-60">
                        Plant Type
                    </div>
                    <div className="py-1">
                        <hr className="w-[20px] border-[1px] border-darkgreen opacity-60 py"></hr>
                    </div>
                    <div>
                        <span className="font-semibold opacity-60">Subject:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
            </div>  
        </div>
    )
}