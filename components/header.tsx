"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="hidden sm:sticky top-0 sm:flex content-center h-[4rem] z-[999] bg-white
    rounded-none border border-white border-opacity-40 bg-opacity-70 shadow-lg 
    shadow-black/[0.03] backdrop-blur-[0.05rem]">

      <div 
        className="flex items-center w-full px-5 sm:px-10
      text-gray-500 text-[0.9] font-medium"
      >
      
        <div className="w-full text-[#043927] font-semibold">
          <Link href="#home">Maeri's Portfolio</Link>
        </div>

        <nav className="flex w-full justify-end">
          <ul className="flex w-[22rem] flex-wrap justify-end
           sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <li 
                className="flex items-center justify-center hover:text-gray-950 
                px-2 py-2 transition"
                key={link.hash}
                
              >
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  )
}