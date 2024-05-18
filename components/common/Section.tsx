import React from 'react'

const Section = ({ className, children, ...props }: any) => {
    return (
        <section {...props} className={`${className} container mx-auto max-h-[60rem] mb-20`}>
            {children}
        </section>
    )
}

export default Section
