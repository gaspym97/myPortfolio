import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'

interface Props {
    openNav: () => void
}

function Nav({ openNav }: Props) {
    //
    const [navSticky, setNavSticky] = useState(false)

    //
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true)
            }
            if (window.scrollY <= 90) {
                setNavSticky(false)
            }
        }
        window.addEventListener("scroll", handler)
    }, [])

    const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

    return (
        <div className={`fixed ${stickyStyle} transition-all duration-300 w-[100%] z-[1000]`}>
            <div className='flex items-center justify-between h-[12vh] w-[80%] mx-auto '>
                <div className='font-logo text-white text-[18px]'>
                    Angel
                    <span className='text-[30px] md:text-[40px] text-yellow-400'>MIRALLES</span>
                </div>
                <ul className='md:flex hidden items-center space-x-10'>
                    <li>
                        <Link href="#" className='nav__link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='nav__link'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='nav__link'>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='nav__link'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className='md:hidden w-[2.3rem] h-[2.3rem] text-white rotate-180' />
            </div>
        </div>
    )
}

export default Nav