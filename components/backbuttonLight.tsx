
import React from 'react'
import Link from 'next/link'

export default function BackButtonLight() {
    return(
        <div className="px-24 text-white text-xl cursor-pointer ">
            <Link href="/">
                <span className="flex items-center">
                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                </span>
            </Link>
        </div>
    )
}