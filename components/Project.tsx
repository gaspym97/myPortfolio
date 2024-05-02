import React from 'react'
import ProjectCard from './helpers/ProjectCard'

function Project() {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='text-center'>
                <p className='heading__mini'>Recent Works</p>
                <h1 className='heading__primary'>
                    My best <span className='text-yellow-300'>Projects</span>
                </h1>
            </div>
            <ProjectCard
                title="E-Commerce Website"
                tech1="React"
                tech2="Next.js"
                tech3="Tailwind"
                tech4="TypeScript"
                image="/images/p1.png"
            />
        </div>
    )
}

export default Project