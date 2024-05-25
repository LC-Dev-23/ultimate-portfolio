import React from 'react'
import Section from '@/components/common/Section'
import CarouselImg from '@/components/CarouselImg'


const Hobby = () => {
    const carouselImages = [
        {
            image: {
                src: "/images/about/legacy-free-code-camp-js-cert.png",
                alt: "Legacy JavaScript Algorithms and Data Structures Certificate"
            }
        },
        {
            image: {
                src: "/images/about/solo-learn-js-cert.png",
                alt: "Sololearn JavaScript Certificate"
            }
        },
        {
            image: {
                src: "/images/about/solo-learn-php-cert.png",
                alt: "Sololearn PHP Certificate"
            }
        },
        {
            image: {
                src: "/images/about/solo-learn-html-cert.png",
                alt: "Sololearn HTML Certificate"
            }
        },
    ];
    // const carouselImages = [
    //     {
    //         image: {
    //             src: "/images/about/mnl-de-speedtest.png",
    //             alt: "MNLeistung DE PageSpeed Insight Result"
    //         }
    //     },
    //     {
    //         image: {
    //             src: "/images/about/mnl-ph-speedtest.png",
    //             alt: "MNLeistung PH PageSpeed Insight Result"
    //         }
    //     },
    //     {
    //         image: {
    //             src: "/images/about/zeta-world-speedtest.png",
    //             alt: "ZETA World PH PageSpeed Insight Result"
    //         }
    //     },
    // ];
    return (
        <Section className="flex flex-col lg:flex-row items-center justify-center h-auto sm:max-h-[60rem] lg:max-h-[65rem] lg:gap-10 xl:gap-20 pb-10">
            <div className='w-full mb-10 md:w-[80%] lg:w-[60%] mt-5'>
                <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-5 lg:mb-10 lg:text-center"><span className="text-accentRed">My</span> Hobby</h2>
                <p className='text-sm lg:text-lg mt-3 lg:mt-5'>Learning isn&apos;t just a chore for me, it&apos;s a genuine source of joy and excitement. I continuously invest in online courses on platforms like Udemy to expand my knowledge and stay sharp. YouTube channels keep me updated with the latest tech trends, while building personal side projects allows me to solidify my core web development skills and explore new ideas in a practical way. This constant learning keeps me engaged and ensures I&apos;m always bringing the freshest approaches to my work.</p>
                <p className='text-sm lg:text-lg mt-3 lg:mt-5'>Outside of coding, I&apos;m an avid reader of Manhwa and Manhua. I enjoy watching anime, especially stories where the protagonist transforms from an underdog to a hero. This resonates with me because, like those characters, I started with little experience but am constantly motivated to upskill and grow.</p>
            </div>
            <div>
                <CarouselImg imgData={carouselImages} />
            </div>
        </Section>
    )
}

export default Hobby
