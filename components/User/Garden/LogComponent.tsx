import Link from "next/link";

export default function LogComponent(){
    return(
        <Link href="/User/openLog"className="flex justify-start items-start w-full h-min-12 md:rounded-lg border-b-[1px] border-darkgreen border-opacity-30 md:border-[1px] bg-white hover:bg-darkgreen hover:bg-opacity-10">
            <div className="flex justify-between p-2 w-full">
                <div className="flex items-center justify-start gap-4 text-sm text-darkgreen">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>

                    <div>
                        <div className="font-bold">
                            Firstname Lastname
                        </div>
                        <div className="font-semibold opacity-60">
                            Nursery Name
                        </div>
                        <div className="py-1">
                            <hr className="w-[20px] border-[1px] border-darkgreen opacity-60 py"></hr>
                        </div>
                        <div className="font-semibold opacity-60">
                            Plant Type
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-start items-end p-2 px-2 gap-2">
                    <div className="text-xs">
                        MM/DD/YYY
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

            </div>  
        </Link>
    )
}