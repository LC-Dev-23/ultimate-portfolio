

import Section from '@/components/common/Section'
import { FlipWords } from '@/components/ui/flip-words'
import { Button } from '@/components/ui/moving-border'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const HeroSection = () => {
  const words = ['Web', "Front-end", "Software", "Mobile"];

  return (
    <div className='relFative'>
      <div className="min-w-[20rem] h-[55rem] md:h-[70rem] lg:h-[50rem] xl:h-[65rem] absolute w-full flex items-center justify-center dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] -z-10" />
      <div className="min-w-[20rem] h-[55rem] md:h-[70rem] lg:h-[50rem] xl:h-[65rem] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
      <Section className="flex flex-col-reverse lg:flex-row items-center justify-center h-[55rem] md:h-[70rem] lg:h-[55rem] xl:h-[65rem] lg:gap-10 xl:gap-20 pb-40 pt-10 lg:py-40">
        <div className='w-[80%] lg:w-[25rem]'>
          <h1><span className='block text-sm lg:text-base'>Hello, <span className='text-accentRed text-base'>I&apos;m</span></span>
            <span className='block text-3xl lg:text-5xl'>Christian Agra</span>
            <span className='text-xl lg:text-3xl'>A </span><span className='text-accentRed text-xl lg:text-3xl'><FlipWords words={words} />  </span> <span className='text-xl lg:text-3xl'>Developer</span></h1>
          <p className='text-sm lg:text-base mt-3 lg:mt-5'>With over a year of web development experience,<span className='lg:block' />
            I bring expertise and innovation to every project,<span className='lg:block' />
            ensuring responsive design across all devices.</p>
          <div className='flex my-5 gap-5'>
            <Link href={'/contact'}>
              <Button
                borderRadius="1rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-gray-800"
              >
                Hire Me
              </Button>
            </Link>

          </div>

        </div>
        <div className='w-[80%] max-w-[20rem] md:max-w-[25rem]  lg:w-[50%] lg:max-w-[40rem] mb-5 sm:mb-0 md:mb-10 xl:w-auto sm:mt-20 lg:mt-0 '>
          <Image
            className="object-cover drop-shadow-logo-shadow"
            src="/images/home/hero-img.png"
            width={1000}
            height={1000}
            alt="Dev Hero Img"
            priority={true}
          />
        </div>
      </Section>
    </div>
  )
}

export default HeroSection
