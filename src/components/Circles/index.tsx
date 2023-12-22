'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CirclesWrapper } from "./styles"

interface circleProps {
    countNumber: number | null
}

gsap.registerPlugin(ScrollTrigger);

const Circles = ({ countNumber }: circleProps) => {
    const [startCount, setStartCount] = useState<number>(0)
    const { scroll } = useLocomotiveScroll();
    const circleRef = useRef<HTMLDivElement>(null)
    const circleEl = circleRef.current as HTMLDivElement
    let num = { var: startCount };


    const circleScroll = (param: HTMLDivElement) => {
        const circleChildEl = param?.querySelector(".circle-inner")
        const numbers = param?.querySelector(".circle-inner h1")
        if (scroll) {
            const tl = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: numbers,
                        start: "top top",
                        end: "+=1800px",
                        scroller: scroll?.el,
                        scrub: .5,
                    }
                }
            )
            tl.fromTo(param, {
                scale: 1,
                opacity: 0
            }, {
                scrollTrigger: {
                    trigger: param,
                    start: `top+=150% bottom`,
                    end: `bottom top`,
                    scroller: scroll?.el,
                    scrub: .5,
                    markers: true
                },
                scale: 1.5,
                opacity: 1
            }).to(num, {
                var: countNumber, duration: 1, ease: "none", onUpdate: countUp
            }).to(param, {
                scale: 1.2,
                opacity: 0
            })

        }
    }



    const countUp = () => {
        let count = JSON.parse(JSON.stringify(num.var))
        setStartCount((count).toFixed())
    }

    useEffect(() => {
        circleScroll(circleEl)
        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update());
            ScrollTrigger.refresh();
        };
    }, [circleEl])
    return (
        <CirclesWrapper ref={circleRef} className="circle"  >
            <div className="circle-inner">
                <div className="circle-inner--text">
                    <h1>{startCount}%</h1>
                    <span>Magma Index</span>
                </div>
            </div>
        </CirclesWrapper>
    )
}

export default Circles