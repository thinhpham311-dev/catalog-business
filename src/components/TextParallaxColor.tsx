'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextParallaxColor = (props: any) => {
    const { scroll } = useLocomotiveScroll();
    const textRef = useRef<HTMLHeadingElement>(null)
    const scrollText = textRef.current as HTMLHeadingElement

    const handleParallaxText = (param: HTMLHeadingElement) => {
        const childEl = param?.querySelectorAll("span")
        setTimeout(() => {
            if (scroll) {
                return gsap.fromTo(childEl, {
                    color: "#dadada69",
                    duration: 8,
                }, {
                    scrollTrigger: {
                        trigger: childEl,
                        start: `top+=50% bottom`,
                        end: `bottom+=${scrollText.clientHeight}% bottom`,
                        scroller: scroll?.el,
                        scrub: .5,
                    },
                    stagger: .2,
                    color: `#fff`,
                    duration: 8,
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
        <h1 ref={textRef} >
            {props.children}
        </h1>
    );
}

export default TextParallaxColor;