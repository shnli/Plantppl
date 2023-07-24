import Link from "next/link";

export default function ViewLogButton(){
    return(
        <div>
            <Link href="/User/openLog" className='flex flex-row justify-center items-center font-semibold'>
                <div className="flex justify-center items-center text-center">View Log</div>
            </Link>
        </div>
    )
}