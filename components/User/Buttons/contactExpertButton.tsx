import Link from "next/link";

export default function ContactExpertButton(){
    return(
        <div>
            <Link href="/" className='flex flex-row justify-center items-center font-semibold'>
                <div className="flex justify-center items-center text-center">Contact an Expert</div>
            </Link>
        </div>
    )
}