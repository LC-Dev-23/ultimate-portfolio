import React from 'react'

const Section = ({ className, children, ...props }: any) => {
    return (
        <section {...props} className={`${className} container mx-auto px-0 mb-20`}>
            {children}
        </section>
    )
}

export default Section
