'use client'
import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const LocomotiveProvider = (props: any) => {
    const containerRef = useRef<HTMLDivElement>(null)
    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth: true,
                    multiplier: .3,
                    tablet: {
                        smooth: true,
                    },
                    smartphone: {
                        smooth: true,
                    }
                    // ... all available Locomotive Scroll instance options 
                }
            }
            watch={
                [
                    //..all the dependencies you want to watch to update the scroll.
                    //  Basicaly, you would want to watch page/location changes
                    //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                ]
            }
            containerRef={containerRef}
        >
            <main id="main" ref={containerRef} data-scroll-container>
                {props.children}
            </main>
        </LocomotiveScrollProvider>

    )
}

export default LocomotiveProvider