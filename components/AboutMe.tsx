import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

function AboutMe() {
    return (
        <div className='mt-[-6rem] bg-black pb-[3rem]'>
            <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                <div>
                    <p className='heading__mini'>About Me</p>
                    <h1 className='heading__primary'>
                        Professional <span className='text-yellow-400'>Website Developer</span> for your bussiness
                    </h1>
                    <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat animi aliquid nam ipsa labore, magni ipsam excepturi natus culpa! Tempora amet autem iusto deserunt minus magni modi magnam harum.</p>
                    <div className='mt-[2rem] space-y-3'>
                        <div className='flex items-end space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Frontend Development</p>
                        </div>
                        <div className='flex items-end space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Backend Development</p>
                        </div>
                        <div className='flex items-end space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Teamwork</p>
                        </div>
                        <div className='flex items-end space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Problem Solving</p>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                        <div className='p-6 text-center bg-yellow-500'>
                            <p className='text-[50px] text-black font-bold'>2</p>
                            <p className='text-[20px] text-black font-600'>
                                Years of experience
                            </p>
                        </div>
                        <div className='p-6 text-center bg-yellow-500'>
                            <p className='text-[50px] text-black font-bold'>20+</p>
                            <p className='text-[20px] text-black font-600'>
                                Happy Clients
                            </p>
                        </div>
                        <div className='p-6 text-center bg-yellow-500'>
                            <p className='text-[50px] text-black font-bold'>300+</p>
                            <p className='text-[20px] text-black font-600'>
                                Proyects Done
                            </p>
                        </div>
                        <div className='p-6 text-center bg-yellow-500'>
                            <p className='text-[50px] text-black font-bold'>3+</p>
                            <p className='text-[20px] text-black font-600'>
                                Others things
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe