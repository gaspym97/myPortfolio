import Nav from '@/components/Nav'
import NavMobile from '@/components/NavMobile'
import React from 'react'

function HomePage() {
  return (
    <>
      <div className='overflow-hidden'>
        <NavMobile />
        <Nav />
      </div>
    </>
  )
}

export default HomePage
