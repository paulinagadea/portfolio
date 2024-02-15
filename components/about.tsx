"use client";

import React from 'react'
import { GoHeart } from 'react-icons/go';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { skillsData, methodsData } from '@/lib/data';

export default function About() {
  return (
    <section className='flex flex-col absolute top-full w-[100%] items-center justify-center sm:mt-0 mt-[4rem]'>
        <div className="w-full">
            <div className="inset-x-0 left-0 h-px bg-green-100"></div>
        </div>

        <h2 className='text-[2.5rem] font-bold tracking-[-.05em] text-[#043927] leading-[5rem] py-4'>
            About me
        </h2>

        <div className='sm:grid gap-4 grid-cols-2 grid-flow-col px-8 pb-8'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='text-[1.7rem] font-bold tracking-[-.05em] text-[#043927] 
                leading-[3rem]'>
                    My Skills
                </p>

                <div className="w-full">
                    <div className="inset-x-0 left-0 h-px bg-green-100"></div>
                </div>

                <div className='text-center py-6'>
                    <ul className='flex flex-wrap justify-center gap-2 text-lg text-[#355E3B]
                    font-medium'>
                        {skillsData.map((skill, index) => (
                            <li 
                                className='bg-green-100 border border-green-950/[0.2] rounded-2xl px-3
                                py-2'
                                key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <p className='text-[1.7rem] font-bold tracking-[-.05em] text-[#043927] 
                leading-[3rem]'>
                    Methods
                </p>

                <div className="w-full">
                    <div className="inset-x-0 left-0 h-px bg-green-100"></div>
                </div>

                <div className='text-center py-6'>
                    <ul className='flex flex-wrap justify-center gap-2 text-lg text-[#355E3B]
                    font-medium'>
                        {methodsData.map((method, index) => (
                            <li 
                                className='bg-green-100 border border-green-950/[0.2] rounded-2xl px-3
                                py-2'
                                key={index}>{method}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className='flex flex-col gap-8 mt-4'>
                <div className='flex flex-col items-start justify-center text-left'>
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

                <div className='flex flex-col items-start justify-center text-left'>
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

                <div className='flex flex-col items-start justify-center text-left'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <div className='bg-white bg-opacity-20 p-1 text-green-950 flex items-center
                        border border-green-950/60 rounded-lg'>
                            <GoHeart />
                        </div>
                        <p className='text-xl tracking-[-.03em] text-[#043927] font-bold'>Interests</p>
                    </div>
                    <p className='text-lg tracking-[-.03em] text-[#355E3B] font-semibold leading-[1.5rem]'>
                    In my free time, I'm all about chilling out and doing things I love. I'm a huge fan of anime and fantasy books. 
                    Knitting's my go-to for some chill time, especially when I'm jamming out to music. Occasionally, I'll also dive 
                    into some video games.
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
