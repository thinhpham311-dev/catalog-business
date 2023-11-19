'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
    const { scroll } = useLocomotiveScroll();
    const circleRef = useRef<HTMLDivElement>(null)
    const circleEl = circleRef.current as HTMLDivElement
    const circleScroll = (param: HTMLDivElement) => {
        if (scroll) {
            gsap.to(param, {
                scrollTrigger: {
                    trigger: param,
                    start: `top center`,
                    end: `bottom top`,
                    scroller: scroll?.el,
                    scrub: .5,
                },
                scale: 1.5,
            })
        }
    }

    const circleInnerScroll = (param: HTMLDivElement) => {
        if (scroll) {
            gsap.to(param, {
                scrollTrigger: {
                    trigger: param,
                    start: `top center`,
                    end: `bottom top`,
                    scroller: scroll?.el,
                    scrub: .5
                },
                backgroundColor: `#0a3bce91`,
            })
        }
    }

    useEffect(() => {
        circleScroll(circleEl)
        circleInnerScroll(circleEl)
        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update());
            ScrollTrigger.refresh();
        };
    }, [circleEl])
    return (
        <div ref={circleRef} className="circle"  >
            <div className="circle-inner"></div>
        </div>
    )
}

export default Circle