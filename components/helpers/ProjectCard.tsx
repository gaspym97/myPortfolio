import Image from 'next/image'
import React from 'react'

interface Props {
    image: string,
    title: string,
    tech1: string,
    tech2: string,
    tech3: string,
    tech4: string,
}

function ProjectCard({ image, title, tech1, tech2, tech3, tech4 }: Props) {
    return (
        <div className='grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div className='p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md'>
                <Image
                    src={`${image}`}
                    alt={title}
                    width={500}
                    height={500}
                    className='object-contain rounded-xl mx-auto shadow-md'
                />
            </div>
        </div>
    )
}

export default ProjectCard