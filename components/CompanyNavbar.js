import React from "react";
import users from "../data/users_permissions";
import Link from "next/link";

export default function CompanyNavbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex font-bold text-xl text-gray-900">
          <span className="flex item-center">
            <img
              src="https://demo.themesberg.com/windster/images/logo.svg"
              className="h-6 mr-2"
              alt="Windster Logo"
            />
            <span className="self-center whitespace-nowrap">ICONNECT</span>
          </span>
        </a>
        <div className=" w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex mt-4 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link href="/router-admin/">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  My Router
                </a>
              </li>
            </Link>
            <Link href="/router-admin/logo">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Logo
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
