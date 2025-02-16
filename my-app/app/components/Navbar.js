"use client"; // Navbar needs to be a client component

import React, { useState, useTransition } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../providers/ThemeProvider";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import localFont from "next/font/local";

const myFont = localFont({ src: "./Montserrat-VariableFont_wght.ttf" });

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // Handles loading state

  const getpathname = (path) => (pathname === path ? "text-red-600 border-red-600 hover:-translate-y-1" : "hover:text-red-400 border-transparent hover:-translate-y-1");

  // Custom function to handle navigation with loading
  const handleNavigation = (url) => {
    startTransition(() => {
      router.push(url); // Navigate to the page
    });
  };

  return (
    <>
      {/* Loader with Blur Effect */}
      {isPending && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-md z-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className={`p-2 flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 shadow-md ${myFont.className} fixed w-full z-50`}>
        <div className="m-0 cursor-pointer drop-shadow-3xl">
          <Image width={150} height={50} src="/logo.png" alt="logo" />
        </div>

        <ul className="flex gap-5 font-bold">
          <li className={`cursor-pointer p-2 hover:scale-110 transition-all duration-300 border-b-2 ${getpathname("/")}`}>
            <button onClick={() => handleNavigation("/")}>Home</button>
          </li>
          <li className={`cursor-pointer p-2 hover:scale-110 transition-all duration-300 border-b-2 ${getpathname("/About")}`}>
            <button onClick={() => handleNavigation("/About")}>About Us</button>
          </li>
          <li className={`cursor-pointer p-2 hover:scale-110 transition-all duration-300 border-b-2 ${getpathname("/Contact")}`}>
            <button onClick={() => handleNavigation("/Contact")}>Contact Us</button>
          </li>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-400 transition-all duration-300 bg-gray-200 dark:bg-gray-800 dark:hover:bg-slate-200"
          >
            <div className="hover:transition-transform hover:duration-500 hover:ease-in-out hover:transform hover:scale-100 hover:rotate-0 hover:dark:rotate-180 hover:dark:scale-125">
              {theme === "dark" ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
            </div>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
