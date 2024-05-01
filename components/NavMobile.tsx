import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/20/solid'

function NavMobile() {
    return (
        <div>
            <div className={`fixed top-0 transform transition-all duration-500 z-[10000] left-0 ring-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}>
            </div>
            <ul className={`text-white fixed flex items-center justify-center flex-col h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}>
                <li><Link href="#" className='nav__link text-[25px] sm:text-[30px]'>Home</Link></li>
                <li><Link href="#" className='nav__link text-[25px] sm:text-[30px]'>About</Link></li>
                <li><Link href="#" className='nav__link text-[25px] sm:text-[30px]'>Services</Link></li>
                <li><Link href="#" className='nav__link text-[25px] sm:text-[30px]'>Contact</Link></li>
                <XMarkIcon className='absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white' />
            </ul>
        </div>

    )
}

export default NavMobile