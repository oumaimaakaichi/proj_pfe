import Link from "next/link";
import {useEffect, useState} from "react";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [open, setOpen] = useState(true);
    const [togglesetting, setToggleseting] = useState(false);
    const [toggleAds, setToogleAds] = useState(false);

    return (
        <>
            <nav className="bg-gray-50 text-gray-900 border-b border-gray-700 fixed z-30 w-full">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <Link href="/">
                                <li className="text-xl font-bold flex items-center lg:ml-2.5">
                                    <span className="flex item-center">
                                    Aghsanli
                                    <div className="w-3 h-3 rounded-full bg-green-500 ml-1"></div>
                                    </span>
                                </li>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900  p-2 rounded-lg">
                                <span className="sr-only">Search</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <div className="flex items-center gap-x-3">
                                <p className="font-medium">Wash station 1</p>
                                <figure className="w-10 h-10">
                                    <img src="https://w7.pngwing.com/pngs/703/528/png-transparent-samsung-logo-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-company-text-label.png" className="w-full h-full object-contain rounded-full"/>
                                </figure>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex overflow-hidden bg-gray-700 pt-16">
                {
                open ? (
                    <aside id="sidebar" className=" fixed  z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
                        <div className="relative flex-1 flex flex-col min-h-0 shadow-xl bg-gray-50 pt-0">
                            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                <div className="flex-1 px-3 bg-gray-50 divide-y space-y-1">
                                    <ul className="space-y-2 pb-2">
                                        <li>
                                            <Link href="/wash-station">
                                                <li className="text-base text-gray-100 font-normal rounded-lg flex items-center p-2  group cursor-pointer">
                                                    <span className="flex item-center">
                                                        <figure className="w-5 h-5">
                                                            <img src="/dashboard.svg" className="w-full"/>
                                                        </figure>
                                                        <span className="ml-3 text-gray-900">Dashboard</span>
                                                    </span>
                                                </li>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/wash-station/account-settings">
                                                <li target="_blank" className="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group cursor-pointer">
                                                    <span className="flex item-center">
                                                        <figure className="w-5 h-5">
                                                            <img src="/router.svg" className="w-full"/>
                                                        </figure>
                                                        <span className="ml-3 text-gray-900 flex-1 whitespace-nowrap">
                                                            Account settings
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="space-y-2 pt-2">
                                        <li className="list-none">
                                            <Link href="/">
                                                <li className="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group cursor-pointer ">
                                                    <span className="flex item-center">
                                                        <svg className="w-6 h-6 text-blue-500 flex-shrink-0 group-hover:text-white transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
                                                        </svg>
                                                        <span className="ml-3 text-gray-900 flex-1 whitespace-nowrap">
                                                            Logout
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                ) : ("")
            } </div>
        </>
    );
}
