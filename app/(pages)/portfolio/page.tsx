import { HeroParallax } from '@/components/ui/hero-parallax'
import React from 'react'

const page = () => {
  const products = [
    {
      title: "Prime",
      link: "#",
      thumbnail:
        "/images/portfilio/prime.jpg",
    },
    {
      title: "MNLeistung Inc.",
      link: "https://mnl-alpha-nextjs.vercel.app/",
      thumbnail:
        "/images/portfilio/mnl-ph.jpg",
    },
        {
      title: "Juantahanan",
      link: "https://juantahanan.ph/",
      thumbnail:
        "/images/portfilio/juantahanan.jpg",
    },
    {
      title: "One Kalayaan Residences",
      link: "https://1kalayaan.ph/",
      thumbnail:
        "/images/portfilio/1kalayaan.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "/images/portfilio/mnl-de-speedtest.png",
    },
    {
      title: "MNLeistung Inc. Services",
      link: "https://mnl-alpha-nextjs.vercel.app/services/",
      thumbnail:
        "/images/portfilio/mnl-ph-services.jpg",
    },
  
    {
      title: "ZETA World Realty Inc.",
      link: "https://zetaworld.ph/",
      thumbnail:
        "/images/portfilio/zeta.jpg",
    },
    {
      title: "MNLeistung GmbH",
      link: "https://mnleistung-de-nextjs-alpha-test.vercel.app/",
      thumbnail:
        "/images/portfilio/mnl-de.jpg",
    },
    {
      title: "One University Residences",
      link: "https://1university.ph/",
      thumbnail:
        "/images/portfilio/1university.jpg",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "/images/portfilio/mnl-de-speedtest.png",
    },
    {
      title: "WRS",
      link: "#",
      thumbnail:
        "/images/portfilio/wrs.jpg",
    },
  
    {
      title: "Starkfest",
      link: "#",
      thumbnail:
        "/images/portfilio/starkfest.jpg",
    },
    {
      title: "RS Realty Concepts Developer Inc.",
      link: "https://rsrealty.ph/",
      thumbnail:
        "/images/portfilio/rs.jpg",
    },
    {
      title: "Travellers Insurance Surety Corp.",
      link: "https://www.triscoph.com/",
      thumbnail:
        "/images/portfilio/trisco.jpg",
    },
    // {
    //   title: "WRS",
    //   link: "#",
    //   thumbnail:
    //     "/images/portfilio/wrs.jpg",
    // },
  ];
  return (
    <main>
      <HeroParallax products={products} />
    </main>
  )
}

export default page
