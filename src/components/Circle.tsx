'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

interface circleProps {
    countNumber: number | null
}

gsap.registerPlugin(ScrollTrigger);

const Circle = ({ countNumber }: circleProps) => {
    const [startCount, setStartCount] = useState<number>(0)
    const { scroll } = useLocomotiveScroll();
    const circleRef = useRef<HTMLDivElement>(null)
    const circleEl = circleRef.current as HTMLDivElement
    let num = { var: startCount };


    const circleScroll = (param: HTMLDivElement) => {
        if (scroll) {
            gsap.to(param, {
                scrollTrigger: {
                    trigger: param,
                    start: `top+=100% center`,
                    end: `bottom top`,
                    scroller: scroll?.el,
                    scrub: .5,
                },
                scale: 1.5,
            })

        }
    }

    const circleChildScroll = (param: HTMLDivElement) => {
        const circleChildEl = param?.querySelector(".circle-inner")
        if (scroll) {
            gsap.to(circleChildEl, {
                scrollTrigger: {
                    trigger: circleChildEl,
                    start: `top+=100% center`,
                    end: `bottom top`,
                    scroller: scroll?.el,
                    scrub: .5
                },
                backgroundColor: `#0a3bce91`,
            })
        }
    }

    const countUpScroll = (param: HTMLDivElement) => {
        const numbers = param?.querySelector(".circle-inner h1")
        gsap.timeline({
            scrollTrigger: {
                trigger: numbers,
                start: "top top",
                end: "+=1000px",
                scroller: scroll?.el,
                scrub: .5,
            }
        })
            .to(num, {
                var: countNumber, duration: 1, ease: "none", onUpdate: countUp
            })

    }

    const countUp = () => {
        let count = JSON.parse(JSON.stringify(num.var))
        setStartCount((count).toFixed())
    }

    useEffect(() => {
        circleScroll(circleEl)
        circleChildScroll(circleEl)
        countUpScroll(circleEl)
        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update());
            ScrollTrigger.refresh();
        };
    }, [circleEl])
    return (
        <div ref={circleRef} className="circle"  >
            <div className="circle-inner">
                <div className="circle-inner--text">
                    <h1>{startCount}%</h1>
                    <span>Magma Index</span>
                </div>
            </div>
        </div>
    )
}

export default Circle