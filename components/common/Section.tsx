import React from 'react'

const Section = ({ className, children, ...props }: any) => {
    return (
        <section {...props} className={`${className} container mb-40`}>
            {children}
        </section>
    )
}

export default Section
