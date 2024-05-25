import * as React from "react"
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"





export default function CarouselImg({imgData}:any) {

  return (
    <Carousel orientation="horizontal" className="w-[80%] mx-auto my-5 max-w-4xl">
      <CarouselContent>
        {imgData.map(({image, index}:any) => (
          <CarouselItem key={index}>
            <div className="lg:p-5">
              <Image
                className="object-cover drop-shadow-logo-shadow"
                src={image.src}
                width={1000}
                height={706}
                alt={image.alt}
                priority={false}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
