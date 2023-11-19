'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextParallax = (props: any) => {
    const { scroll } = useLocomotiveScroll();
    const textRef = useRef<HTMLHeadingElement>(null)
    const scrollText = textRef.current as HTMLHeadingElement

    const handleParallaxText = (param: HTMLHeadingElement) => {
        const childEl = param?.querySelectorAll("span")
        setTimeout(() => {

            if (scroll) {
                return gsap.to(childEl, {
                    scrollTrigger: {
                        trigger: childEl,
                        start: `top bottom`,
                        end: `bottom top`,
                        scroller: scroll?.el,
                        scrub: .5,
                    },
                    stagger: .2,
                    color: `#fff`
                })
            }
        })
    }

    useEffect(() => {
        if (scrollText) {
            let clutter = "";
            scrollText?.textContent?.split("").forEach(function (dets) {
                clutter += `<span>${dets}</span>`
                scrollText.innerHTML = clutter;
            })
            if (clutter && clutter.length > 0)
                handleParallaxText(scrollText)
        }

    }, [scrollText]);


    return (
        <h1 ref={textRef}>
            {props.children}
        </h1>
    );
}

export default TextParallax;