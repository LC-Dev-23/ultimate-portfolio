import TechIconBtn from '@/components/TechIconBtn'
import Section from '@/components/common/Section'
import React from 'react'

const CodingArsenal = () => {
  return (
    <div className='relative'>
      <div className="h-[135rem] md:h-[100rem] lg:h-[75rem] xl:h-[55rem] 2xl:h-[45rem] left-0 top-20 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] absolute flex items-center justify-center -z-10" />
        <div className="h-[135rem] md:h-[100rem] lg:h-[75rem] xl:h-[55rem] 2xl:h-[45rem] top-20 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
      <Section className="px-0 xl:gap-20">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold mb-20">Coding <span className="text-accentRed">Arsenal</span></h2>
        <div className="w-[80%] md:w-[40rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[85rem] mx-auto grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 pt-16 gap-10 place-content-center mt-5">
          <TechIconBtn title="HTML 5" srcImg="/images/home/tech-logo/html5-logo.png" />
          <TechIconBtn title="CSS 3" srcImg="/images/home/tech-logo/css3-logo.png" />
          <TechIconBtn title="JS (es6)" srcImg="/images/home/tech-logo/js-logo.png" />
          <TechIconBtn title="Typescript" srcImg="/images/home/tech-logo/typescript-logo.png" />
          <TechIconBtn title="PHP" srcImg="/images/home/tech-logo/php-logo.png" />
          <TechIconBtn title="Wordpress" srcImg="/images/home/tech-logo/wordpress-logo.png" />
          <TechIconBtn title="Tailwind" srcImg="/images/home/tech-logo/tailwind-logo.png" />
          <TechIconBtn title="React Js" srcImg="/images/home/tech-logo/react-logo.png" />
          <TechIconBtn title="Next Js" srcImg="/images/home/tech-logo/nextjs-logo.png" style="dark:invert" />
          <TechIconBtn title="Vite" srcImg="/images/home/tech-logo/vite-logo.png" />
          <TechIconBtn title="Framer" srcImg="/images/home/tech-logo/framer-motion-logo.png" />
          <TechIconBtn title="Radix UI" srcImg="/images/home/tech-logo/radixui-logo.png" style="dark:invert" />
          <TechIconBtn title="Shadcn/UI" srcImg="/images/home/tech-logo/shadcnui-logo.png" style="dark:invert" />
          <TechIconBtn title="Aceternity UI" srcImg="/images/home/tech-logo/aceternitiyui-logo.png" style="dark:invert" />
          <TechIconBtn title="Bootstrap 5" srcImg="/images/home/tech-logo/bootstrap-logo.png" />
          <TechIconBtn title="Cpanel" srcImg="/images/home/tech-logo/cpanel-logo.png" />
          <TechIconBtn title="MySQL" srcImg="/images/home/tech-logo/mysql-logo.png" />
          <TechIconBtn title="Laravel" srcImg="/images/home/tech-logo/laravel-logo.png" />
          <TechIconBtn title="Ionic" srcImg="/images/home/tech-logo/ionic-logo.png" style="dark:invert" />
          <TechIconBtn title="C++" srcImg="/images/home/tech-logo/c++-logo.png" />
          <TechIconBtn title="Github" srcImg="/images/home/tech-logo/github-logo.png" style="dark:invert" />
          <TechIconBtn title="Gitlab" srcImg="/images/home/tech-logo/gitlab-logo.png" />

        </div>
      </Section>
    </div>
  )
}

export default CodingArsenal
