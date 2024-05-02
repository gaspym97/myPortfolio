import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypeWriteEffect() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'a React Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Next.js Developer',
                1000,
                'a Nest.js Developer',
                1000,
                'a Web Development Enthusiast',
                1000
            ]}
            wrapper="span"
            speed={30}
            className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold'
            repeat={Infinity}
        />
    )
}

export default TypeWriteEffect