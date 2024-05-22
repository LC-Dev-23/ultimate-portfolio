import TechIconBtn from '@/components/TechIconBtn'
import Section from '@/components/common/Section'
import React from 'react'

const CodingArsenal = () => {
  return (
    <Section className="px-0 xl:gap-20 relative">
      <div className="h-[120rem] md:h-[80rem] lg:h-[60rem] top-20 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute flex items-center justify-center -z-10" />
      <div className="h-[120rem] md:h-[80rem] lg:h-[60rem] top-20 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
      <h2 className="text-center text-3xl lg:text-5xl font-semibold mb-20">Coding <span className="text-accentRed">Arsenal</span></h2>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-16 gap-5 place-content-center mt-5">
        <TechIconBtn title="HTML 5" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="CSS 3" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="JS (es6)" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Typescript" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="PHP" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Wordpress" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Tailwind" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="React Js" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Next Js" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Ionic" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Framer" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Radix UI" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Shadcn/UI" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Aceternity UI" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Bootstrap 5" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Cpanel" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Github" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Gitlab" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="MySQL" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Laravel" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="C++" srcImg="/images/home/responsive-hero.png" />
        <TechIconBtn title="Visual Basic" srcImg="/images/home/responsive-hero.png" />
      </div>
    </Section>
  )
}

export default CodingArsenal
