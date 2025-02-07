"use client"; // Navbar needs to be a client component

import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../providers/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from 'next/font/local';
const myFont = localFont({ src: './Montserrat-VariableFont_wght.ttf' });


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const getpathname = (path) => {
    return pathname === path ? 'text-red-600' : 'hover:text-red-600';
  };


  return (
    <div className={`m-2 p-2 flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white shadow-md ${myFont.className}`}>
      <div className="">
        <div className="text-4xl font-bold text-center">Yukti</div>
        <div className="text-xs font-normal text-center">Experience, Engage, Excel</div>
      </div>


      <ul className="flex gap-5 font-bold">
        <li className={`cursor-pointer p-2 ${getpathname('/')}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`cursor-pointer p-2 ${getpathname('/About')}`}>
          <Link href="/About">About Us</Link>
        </li>
        <li className={`cursor-pointer p-2 ${getpathname('/Contact')}`}>
          <Link href="/Contact">Contact Us</Link></li>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-800"
        >
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </ul>

    </div>
  );
};

export default Navbar;
