import React from 'react'
import Section from '@/components/common/Section'
import CarouselImg from '@/components/CarouselImg'


const Accomplishment = () => {

    const carouselImages = [
        {
            image: {
                src: "/images/about/mnl-de-speedtest.png",
                alt: "MNLeistung DE PageSpeed Insight Result"
            }
        },
        {
            image: {
                src: "/images/about/mnl-ph-speedtest.png",
                alt: "MNLeistung PH PageSpeed Insight Result"
            }
        },
        {
            image: {
                src: "/images/about/zeta-world-speedtest.png",
                alt: "ZETA World PH PageSpeed Insight Result"
            }
        },
    ];
    return (
        <Section className="flex flex-col-reverse lg:flex-row items-center justify-center h-auto sm:max-h-[70rem] lg:max-h-[80rem]  xl:min-h-[80vh] pt-24 lg:gap-10 xl:gap-20">
            <div>
                <CarouselImg imgData={carouselImages} />
            </div>
            <div className='w-full mb-10 md:w-[80%] lg:w-[60%]'>
                <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-5 lg:mb-10 lg:text-center"><span className="text-accentRed">My</span> Accomplishment</h2>
                <p className='text-sm md:text-base lg:text-lg mt-3 lg:mt-5'>In my work, I leverage my expertise in HTML, CSS, JavaScript, and the powerful front-end library React.js. I also utilize the Next.js framework with Tailwind CSS to create interactive and responsive layouts that adapt seamlessly to any device.</p>
                <p className='text-sm md:text-base lg:text-lg mt-3 lg:mt-5'>I significantly improved our company website&apos;s performance by building a Single Page Application (SPA) experience within a Multi-Page Application (MPA) structure. This unique approach not only boosted speed but also enabled instant theming changes, including colors and images.  Furthermore, I implemented clean code practices, optimized images, and improved SEO to enhance our website&apos;s visibility and attract more users.</p>
                <p className='text-sm md:text-base lg:text-lg mt-3 lg:mt-5'>In the past two years, I&apos;ve actively learned and expanded my skillset, transitioning from WordPress to vanilla JavaScript.  I&apos;ve also explored frameworks like Laravel and ultimately embraced Next.js as our company scales.</p>
            </div>
        </Section>
    )
}

export default Accomplishment
