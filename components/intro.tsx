"use client";

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='flex absolute top-0 flex-col items-center justify-center text-center h-[100vh] px-4 mt-8
        '>
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className='text-[3rem] font-bold sm:text-[4.5rem] tracking-tight text-[#043927] 
            sm:leading-[6rem] leading-[4rem]'
            >
                Welcome! <br /> I'm Paulina Gadea
            </h1>

            <h2 className='text-[1.75rem] font-semibold leading-[2rem] sm:mt-5 sm:mb-7 tracking-tight 
            sm:text-[2rem] text-green-100 my-3'>
                Front End Developer | QA Tester
            </h2>

            <p className='text-[20px] sm:text-[1.5rem] font-semibold tracking-tighter text-center 
            text-balance text-[#355E3B]'
            >
                I'm open to new challenges and opportunities. Dive into my portfolio to see what I bring to the table. <br />
                Got a coding project waiting? Let's team up and make it happen!
            </p>
        </motion.div>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 pt-8 
            text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
            }}
            >

            <Link href='#contact'
                className='bg-green-900 text-white px-4 py-3 flex items-center gap-2 rounded-2xl
                outline-none focus:scale-105 hover:scale-105 active:scale-100 hover:bg-green-950
                transition'
            >
                Contact me!{" "} 
                <BsArrowRight className='group-hover:translate-x-1 transition'/>
            </Link>

            <a className='bg-white bg-opacity-0 text-green-900 px-5 py-3 flex items-center gap-2 
            border border-green-800/60 rounded-2xl group outline-none focus:scale-105 hover:scale-105 
            active:scale-100 hover:bg-green-200 transition cursor-pointer'
            href='/cv_fullstack-paulinagadea.pdf' download>
                Resume <HiDownload className='group-hover:translate-y-0.5 transition'/>
            </a>

            <a className='bg-white bg-opacity-0 p-4 text-green-900 flex items-center gap-2
            border border-green-800/60 rounded-2xl group outline-none focus:scale-105 hover:scale-105 
            active:scale-100 hover:bg-green-200 transition cursor-pointer hover:text-green-950'
            href='https://www.linkedin.com/in/paulinagadea/' target='_blank'>
                <BsLinkedin />
            </a>

            <a className='bg-white bg-opacity-0 p-4 text-green-900 flex items-center gap-2
            border border-green-800/60 rounded-2xl group outline-none focus:scale-105 hover:scale-105 
            active:scale-100 hover:bg-green-200 transition cursor-pointer hover:text-green-950'
            href='https://github.com/paulinagadea' target='_blank'>
                <FaGithubSquare />
            </a>

        </motion.div>
    </section>
  )
}
