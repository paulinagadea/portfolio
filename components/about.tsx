"use client";

import React from 'react'
import { GoHeart } from 'react-icons/go';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';

export default function About() {
  return (
    <section className='flex flex-col absolute top-full w-[100%] items-center justify-center'>
        <div className="w-full">
            <div className="inset-x-0 left-0 h-px bg-green-100"></div>
        </div>

        <h2 className='text-[1rem] sm:text-[2.5rem] font-bold tracking-[-.05em] text-[#043927] 
            sm:leading-[5rem] leading-[4rem] py-4'>
            About me
        </h2>

        <div className='grid gap-4 grid-cols-2 grid-flow-col px-8 pb-8'>
            <div className='flex flex-col gap-1'>
                <p>SKILLS</p>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-col items-start justify-center text-left p-2'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <div className='bg-white bg-opacity-20 p-1 text-green-950 flex items-center
                        border border-green-950/60 rounded-lg'>
                            <RxPerson />
                        </div>
                        <p className='text-xl tracking-[-.03em] text-[#043927] font-bold'>Me</p>
                    </div>
                    <p className='text-lg tracking-[-.03em] text-[#355E3B] font-semibold leading-[1.5rem]'>
                    I'm a Front-End Developer with a creative and detail-oriented approach, actively immersing into
                    quality assurance methodologies, where my passion for precision and attention to detail converge.
                    </p>
                </div>

                <div className='flex flex-col items-start justify-center text-left p-2'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <div className='bg-white bg-opacity-20 p-1 text-green-950 flex items-center
                        border border-green-950/60 rounded-lg'>
                            <RiArrowGoBackFill />
                        </div>
                        <p className='text-xl tracking-[-.03em] text-[#043927] font-bold'>Background</p>
                    </div>
                    <p className='text-lg tracking-[-.03em] text-[#355E3B] font-semibold leading-[1.5rem]'>
                    Over the past three years, I've transitioned from discovering my passion for technology to actively 
                    pursuing it. This involved self-teaching in UX/UI design, progressing into web development and quality assurance. 
                    This progression reflects my adaptability and commitment to continuous growth in the dynamic tech sector.
                    </p>
                </div>

                <div className='flex flex-col items-start justify-center text-left p-2'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <div className='bg-white bg-opacity-20 p-1 text-green-950 flex items-center
                        border border-green-950/60 rounded-lg'>
                            <GoHeart />
                        </div>
                        <p className='text-xl tracking-[-.03em] text-[#043927] font-bold'>Interests</p>
                    </div>
                    <p className='text-lg tracking-[-.03em] text-[#355E3B] font-semibold leading-[1.5rem]'>
                    In my free time, I enjoy watching anime, reading (mostly fantasy), knitting, listening to music, and occasionally 
                    playing video games.
                    </p>
                </div>
            </div>
        </div>

        <div className="w-full">
            <div className="inset-x-0 left-0 h-px bg-green-100"></div>
        </div>

    </section>
  )
}
