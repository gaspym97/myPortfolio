"use client"
import React, { useEffect, useState } from 'react'
import NavMobile from '@/components/NavMobile'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {

  // useState to open and close the navBar
  const [showNav, setShowNav] = useState<boolean>(false)
  const openNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  // animation setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom'
    })
  }, [])

  return (
    <>
      <div className='overflow-hidden'>
        <NavMobile showNav={showNav} closeNav={closeNavHandler} />
        <Nav openNav={openNavHandler} />
        <Hero />
        <AboutMe />
        <Services />
        <Skills />
        <Project />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
