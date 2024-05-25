import React from 'react'
import AboutMe from '@/components/layout/about-me/AboutMe'
import Accomplishment from '@/components/layout/about-me/Accomplishment'
import Hobby from '@/components/layout/about-me/Hobby'
import Education from '@/components/layout/about-me/Education'
import { SparklesCore } from '@/components/ui/sparkles'


const page = () => {
  return (
    <main className='relative'>
      <div className="w-full absolute -z-10 inset-0 h-auto">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        </div>
        <AboutMe />
        <Education />
        <Accomplishment />
        <Hobby />
    </main>
  )
}

export default page
