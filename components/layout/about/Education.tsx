import React from 'react'
import Section from '@/components/common/Section'
import Image from 'next/image'



const Education = () => {
  return (
    <Section className="flex flex-col-reverse lg:flex-row items-center justify-center h-auto md:h-[100vh] lg:h-[55rem] xl:h-[50rem] lg:gap-10 xl:gap-20">
      <div className='w-full mb-10 md:w-[80%] lg:w-[60%] mt-5'>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-5 lg:mb-10"><span className="text-accentRed">My</span> Education</h2>
        <p className='text-sm md:text-base lg:text-lg mt-3 lg:mt-5'>I graduated from the Philippine Best Training System Colleges with a <span className='italic font-bold'>Bachelor of Science in Information Technology</span>. This degree provided me with a strong foundation in computer science principles and web development concepts, which have been instrumental in my growth as a developer.</p>
        <p className='text-sm md:text-base lg:text-lg mt-3 lg:mt-5'>As part of the <span className='italic font-bold'>Philippines&apos; first K-12 graduating batch</span>, I experienced the challenges of a major educational shift during a global pandemic. This experience instilled in me a strong sense of resilience and the ability to adapt to new situations quickly. These qualities are invaluable assets in the ever-evolving field of web development.</p>
      </div>
      <div className='bg-white rounded-[50%] w-[80%] min-w-[15rem] max-w-[20rem] lg:max-w-[22rem]'>
        <Image
          className="object-cover drop-shadow-logo-shadow"
          src="/images/about/toga.png"
          width={700}
          height={902}
          alt="formal attire"
          priority={true}
        />
      </div>
    </Section>
  )
}

export default Education
