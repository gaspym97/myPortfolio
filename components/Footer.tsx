import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Footer() {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40'>
                <div>
                    <div className='font-logo text-white text-[18px]'>
                        Angel <span className='text-[30px] md:text-[40px] text-yellow-400'>MIRALLES</span>
                    </div>
                    <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, eaque recusandae! Consectetur laboriosam hic at esse incidunt. Laboriosam a dolor voluptatem, perferendis, facere, quisquam voluptatum animi velit modi culpa doloremque.</h1>
                    <p className='mt-[1.3rem] text-yellow-300 font-semibold'>
                        thanks for visiting mi site. have a nice day :7
                    </p>
                </div>
                <div className='md:mx-auto'>
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Quick Navigation
                    </h1>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        About
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Services
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Project
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Contact
                    </p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Personal Info
                    </h1>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <MapIcon className='w-[1rem] h-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>
                            West Palm Beach, Florida, USA.
                        </p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <EnvelopeIcon className='w-[1rem] h-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>
                            angelgasparmiralles@gmail.com
                        </p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <PhoneIcon className='w-[1rem] h-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>
                            +1 561-851-2297
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
                &#169; Copyright angelmiralles 2024
            </div>
        </div>
    )
}

export default Footer