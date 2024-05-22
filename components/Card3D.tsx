"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const Card3D = ({ title, cardData }: any) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-accentRed/[0.5] hover:shadow-2xl hover:shadow-black/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[25rem] h-[42rem] rounded-xl p-6 border  ">
        <CardItem translateZ="60" className="w-full">
          <Image
            className="h-[15rem] w-full object-contain rounded-xl group-hover/card:shadow-xl"
            src="/images/home/responsive-hero.png"
            width={700}
            height={700}
            alt="LC Dev Logo"
            priority={true}
          />
        </CardItem>
        <CardItem
          translateZ="80"
          className="text-xl font-bold text-neutral-600 dark:text-white my-5"
        >
          {title}
        </CardItem>
        <CardItem
          as="div"
          translateZ="100"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <ul>
            {cardData.map((listItem: any, innerIndex: any) => (
              <li className="mb-3 list-disc list-inside" key={innerIndex}>{listItem}</li>
            ))}
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default Card3D
