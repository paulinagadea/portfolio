"use client";

import React from 'react'
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className='flex absolute top-0 flex-col items-center justify-center text-center h-[100vh] px-4'>
        <motion.h1 className='text-[3rem] font-bold sm:text-[4.5rem] tracking-tight text-[#043927] 
        sm:leading-[6rem] leading-[4rem]'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: 'tween',
                duration: 0.2,
            }}
        >
            Welcome! <br /> I'm Paulina Gadea
        </motion.h1>

        <h2 className='text-[1.75rem] font-semibold leading-[2rem] sm:mt-5 sm:mb-7 tracking-tight 
        sm:text-[2rem] text-green-100 my-3'>
            Front End Developer | QA Tester
        </h2>

        <p className='text-[20px] sm:text-[1.5rem] font-semibold tracking-tighter text-center 
        text-balance text-[#355E3B]'>
            I'm open to new challenges and opportunities. Dive into my portfolio to see what I bring to the table. <br />
            Got a coding project waiting? Let's team up and make it happen!
        </p>

    </section>
  )
}
