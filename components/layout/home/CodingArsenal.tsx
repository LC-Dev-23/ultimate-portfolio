import Section from '@/components/common/Section'
import React from 'react'
import Image from "next/image";

const CodingArsenal = () => {
    return (
        <Section className="h-[40rem] xl:gap-20 relative">
            <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute flex items-center justify-center -z-10" />
            <div className="h-[40rem] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
            <h2 className="text-center text-4xl font-semibold mt-5">Coding <span className="text-accentRed">Arsenal</span></h2>
            <div className="grid grid-rows-4 grid-cols-4 h-[25rem] pt-16 gap-5 place-content-center mt-5">
            <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
                      <Image
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
              
            </div>
        </Section>
    )
}

export default CodingArsenal
