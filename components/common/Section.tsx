import React from 'react'

const Section = ({ className, children, ...props }: any) => {
    return (
        <section {...props} className={`${className} container`}>
            {children}
        </section>
    )
}

export default Section
