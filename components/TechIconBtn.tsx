import React from 'react'
import Image from "next/image";

const TechIconBtn = ({ title,srcImg, altImg, ...props }: any) => {
    return (
        <div className="cursor-pointer">
        <Image
            {...props}
            className="h-[5rem] w-full object-contain rounded-xl group-hover/card:shadow-xl hover:scale-110"
            src={srcImg}
            width={700}
            height={700}
            alt={altImg}
            priority={true}
        />
        <h3 className="text-center p-5 font-light">{title}</h3>
        </div>
    )
}

export default TechIconBtn
