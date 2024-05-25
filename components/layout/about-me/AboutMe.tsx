import React from 'react'
import Section from '@/components/common/Section'
import Image from 'next/image'

const AboutMe = () => {
    return (
        <Section className="flex flex-col lg:flex-row items-center justify-center h-auto pt-24 md:h-[100vh] lg:h-[55rem] 2xl:h-[60rem] lg:gap-10 2xl:gap-20">
            <div className='bg-white rounded-[50%] w-[80%] min-w-[15rem] max-w-[20rem] lg:max-w-[22rem]'>
                <Image
                    className="object-cover drop-shadow-logo-shadow"
                    src="/images/about/formal.png"
                    width={700}
                    height={902}
                    alt="formal attire"
                    priority={true}
                />
            </div>
            <div className='w-full mb-10 md:w-[80%] lg:w-[60%] mt-5'>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-5 lg:mb-10">About <span className="text-accentRed">Me</span></h1>
                <p className='text-lg md:text-2xl'>Hi, I&apos;m Lord Christian Agra!</p>
                <p className='text-sm md:text-base lg:text-lg mt-3 lg:mt-5'>For nearly two years now, I&apos;ve been a web developer, and I absolutely love it!  The world of web development is constantly changing, with new challenges and solutions popping up all the time. This keeps me excited and eager to learn more.  I&apos;ve always been naturally curious, and that, combined with my love for technology, really fuels my passion for development. There&apos;s nothing more satisfying than taking someone&apos;s idea and turning it into a website that&apos;s clean, works well, and is easy to use.</p>
            </div>
        </Section>
    )
}

export default AboutMe
