'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import tw, { styled } from 'twin.macro';

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
                    stagger: .5,
                }, {
                    scrollTrigger: {
                        trigger: childEl,
                        start: `top bottom`,
                        end: `bottom+=${scrollText.offsetHeight}px bottom`,
                        scroller: scroll?.el,
                        scrub: .5,
                    },
                    stagger: .5,
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
        <Heading ref={textRef} >
            {props.children}
        </Heading>
    );
}

export default TextParallaxColor;

const Heading = styled.h1(() => [
    tw`block h-[auto]`
])