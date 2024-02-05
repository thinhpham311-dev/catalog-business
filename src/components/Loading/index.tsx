"use client"
import React, { useState, useEffect } from "react";
import { LoadingWrapper, Overlay, Count } from "./styles"
import { gsap, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Loading = (props: any) => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {

        const count = setInterval(() => {
            setCounter((counter: number): any =>
                counter < 100
                    ? counter + 1
                    : (clearInterval(count), setCounter(100), reveal())
            );
        }, 5);


    }, []);


    const reveal = () => {
        const tl = gsap.timeline()
        tl.to(".count", 0.25, {
            delay: 0.5,
            opacity: 0
        }, 0).to(".bar", 1.5, {
            delay: 0.5,
            height: 0,
            stagger: {
                amount: 0.5
            },
            ease: "power4.inOut"
        }, 0).to(".loading", 2.25, {
            delay: 0.5,
            display: "none"
        }, 0)
    }


    return (
        <>
            <LoadingWrapper className="loading">
                <Overlay >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </Overlay>


                <Count className="count">
                    {counter}%
                </Count>

            </LoadingWrapper>
            {props.children}
        </>
    );
}

export default Loading;

