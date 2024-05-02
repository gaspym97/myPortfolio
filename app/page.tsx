"use client"
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import NavMobile from '@/components/NavMobile'
import React, { useState } from 'react'

function HomePage() {

  // useState to open and close the navBar
  const [showNav, setShowNav] = useState<boolean>(false)
  const openNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <>
      <div className='overflow-hidden'>
        <NavMobile showNav={showNav} closeNav={closeNavHandler} />
        <Nav openNav={openNavHandler} />
        <Hero />
      </div>
    </>
  )
}

export default HomePage
