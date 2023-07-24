import React, { useState } from 'react'
import Link from 'next/link'
import TopNavbar from './topNavbar';
import { useRouter } from 'next/router';


export default function SideNavbar() {
    const router = useRouter();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
        
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='text-darkgreen font-Mont'>
            <TopNavbar></TopNavbar>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-8 py-8 overflow-y-auto border-r-2">
                    <ul className="space-y-4 ">
                        <Link href="/" className="flex items-center text-primary-blue font-Barrio">
                            <span className="ml-3 pb-12 self-center text-xl font-semibold whitespace-nowrap ">Plant People</span>
                        </Link>
                        
                        <Link href="/Nursery/nurseryIndex">
                            <div className='ml-3 text-gray-400 hover:underline'>Main Menu</div>
                        </Link>
                        <hr className='border-[1px] border-darkgreen opacity-20'></hr>
                        
                        <li>
                            <Link href="/Nursery/tickets" className={`flex items-center p-2 rounded-lg hover:bg-darkgreen hover:bg-opacity-70 hover:text-white ${router.pathname === '/Nursery/tickets' ? 'bg-darkgreen bg-opacity-20 ' : 'text-gray-500'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                                </svg>
                                <span className="ml-3">Tickets</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Nursery/myProfile" className={`flex items-center p-2 rounded-lg hover:bg-darkgreen hover:bg-opacity-70 hover:text-white ${router.pathname === '/Nursery/myProfile' ? 'bg-darkgreen bg-opacity-20 ' : 'text-gray-500'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="ml-3">My Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            


        </div>
    );
}

