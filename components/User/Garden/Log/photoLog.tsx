//FROM THE USERimport Link from "next/link";

export default function PhotoLog(){
    return(
        <div className="min-h-[100px] max-w-[500px] rounded-md border-[1px] bg-white border-darkgreen border-opacity-30 overflow-hidden font-Mont">
            <div className="h-auto ">
                <img src="/plantTemp.webp"></img>
            </div>
            <div className="flex flex-col gap-1 border-t-[1px] p-4 text-white  bg-darkgreen border-darkgreen border-opacity-30 text-xs md:text-sm overflow-hidden">
                <div className="flex justify-end text-[10px]">
                    MM/DD/YYYY
                </div>
                <div className="font-semibold">
                    This is a caption. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed vulputate odio, nec ornare eros. Mauris sagittis hendrerit venenatis. Vestibulum ac ipsum sit amet neque.
                </div>
            </div>
        </div>
    )
}