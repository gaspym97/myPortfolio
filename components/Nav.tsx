import React from 'react'

function Nav() {
    return (
        <div className='fixed w-[100%] z-[1000] bg-gray-800'>
            <div className='flex items-center justify-between h-[12vh] w-[80%] mx-auto '>
                <div className='font-logo text-white text-[18px]'>
                    Angel
                    <span className='text-[30px] md:text-[40px] text-yellow-400'>MIRALLES</span>
                </div>
            </div>
        </div>
    )
}

export default Nav