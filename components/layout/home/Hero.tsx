

import Section from '@/components/common/Section'
import { Button } from '@/components/ui/moving-border'

import Image from 'next/image'
import React from 'react'

const HeroSection = () => {


  return (
    <>

      <Section className="relative flex flex-col-reverse lg:flex-row items-center justify-center h-[60rem] lg:gap-10 xl:gap-20">
        <div className="h-[60rem] min-w-[320px] absolute w-full flex items-center justify-center dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] -z-10" />
        <div className="h-[60rem] min-w-[320px] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
        <div className='w-[80%] lg:w-[25rem]'>
          <h1><span className='block text-sm lg:text-base'>Hello, <span className='text-accentRed text-base'>I&apos;m</span></span>
            <span className='block text-3xl lg:text-5xl'>Christian Agra</span>
            <span className='text-xl lg:text-3xl'>A </span><span className='text-accentRed text-xl lg:text-3xl'>Web Developer</span></h1>
          <p className='text-sm lg:text-base mt-3 lg:mt-5'>With over a year of web development experience,<span className='lg:block' />
            I bring expertise and innovation to every project,<span className='lg:block' />
            ensuring responsive design across all devices.</p>
          <div className='flex my-5 gap-5'>
            <Button
              borderRadius="1rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-gray-800"
            >
              Hire Me
            </Button>
      
          </div>

        </div>
        <div className='w-[80%] mb-10 sm:w-[60%] md:mt-20 lg:mt-0 lg:mb-0 lg:w-[50%] xl:w-auto'>
          <Image
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
        </div>
      </Section>
    </>
  )
}

export default HeroSection
