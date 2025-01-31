"use client"; // Navbar needs to be a client component

import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../providers/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="m-2 p-2 flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
      <div className="text-xl font-bold">Yukti</div>

      <ul className="flex gap-5">
        <li className="hover:text-red-600 cursor-pointer">Home</li>
        <li className="hover:text-red-600 cursor-pointer">About Us</li>
        <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
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
