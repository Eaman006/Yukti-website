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
    <div className={`p-2 flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 shadow-md ${myFont.className} fixed w-full`}>
      <div className="m-0 cursor-pointer">
        <Link href="/">
        <Image width={150} height={50} src="/logo.png" alt="logo" />
        </Link>
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
  className="p-2 rounded-full hover:bg-slate-400 transition-all duration-300 bg-gray-200 dark:bg-gray-800 dark:hover:bg-slate-200"
>
  <div className="hover:transition-transform hover:duration-500 hover:ease-in-out hover:transform hover:scale-100 hover:rotate-0 hover:dark:rotate-180 hover:dark:scale-125">
    {theme === "dark" ? (
      <SunIcon className="w-6 h-6 text-yellow-400" />
    ) : (
      <MoonIcon className="w-6 h-6 text-gray-800" />
    )}
  </div>
</button>
      </ul>

    </div>
  );
};

export default Navbar;
