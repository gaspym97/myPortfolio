import React from 'react'
import SkillCard from './helpers/SkillCard'

function Skills() {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center'>
                <div className='col-span-3'>
                    <p className='heading__mini'>My Skills</p>
                    <h1 className='heading__primary'>
                        Let's Explore My <span className='text-yellow-300'>Skills</span>{''} & Experience
                    </h1>
                    <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, explicabo. Sunt suscipit quis nam eius fugit autem facere necessitatibus, odit quasi vel, a impedit neque, cupiditate eaque quia esse minus. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-300 hover:text-black before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                        <span className='relative z-10'>Learn More</span>
                    </button>
                </div>
                <div className='col-span-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
                        <div>
                            <SkillCard
                                title='HTML'
                                image='/images/html.svg'
                                percent='90%'
                            />
                        </div>
                        <div>
                            <SkillCard
                                title='CSS'
                                image='/images/css.svg'
                                percent='60%'
                            />
                        </div>
                        <div>
                            <SkillCard
                                title='JavaScript'
                                image='/images/js.svg'
                                percent='75%'
                            />
                        </div>
                        <div>
                            <SkillCard
                                title='React'
                                image='/images/react.svg'
                                percent='85%'
                            />
                        </div>
                        <div>
                            <SkillCard
                                title='TypeScript'
                                image='/images/ts.svg'
                                percent='70%'
                            />
                        </div>
                        <div>
                            <SkillCard
                                title='Next.js'
                                image='/images/next.svg'
                                percent='85%'
                            />
                        </div>
                        <div>
                            <SkillCard
                                title='Node.js'
                                image='/images/node.svg'
                                percent='50%'
                            />
                        </div>
                        <div>
                            <SkillCard
                                title='Python'
                                image='/images/python.svg'
                                percent='80%'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills