'use client'
import React, { useRef, useEffect } from 'react'
import { CanvasWrapper } from '@/styles/GlobalStyles'
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

interface CanvasProps {
    data: string[],
}

gsap.registerPlugin(ScrollTrigger);

const CanvasParallax = ({ data }: CanvasProps) => {
    let images: any[] = []
    const imageSeq = { frame: 1 };

    const { scroll } = useLocomotiveScroll();
    const canvasRef = useRef<HTMLDivElement>(null)
    const scrollCanvas = canvasRef.current as HTMLDivElement

    const render = () => {
        const canvasEl = canvasRef.current?.querySelector("canvas")
        const context = canvasEl?.getContext("2d");
        scaleImage(images[imageSeq.frame], context);
    }

    const scaleImage = (img: HTMLImageElement, ctx: any) => {
        let canvas = ctx.canvas;
        let hRatio = canvas.width / img.width;
        let vRatio = canvas.height / img.height;
        let ratio = Math.max(hRatio, vRatio);
        let centerShift_x = (canvas.width - img.width * ratio) / 2;
        let centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }

    const createScroll = () => {

        if (scroll) {
            gsap.to(imageSeq, {
                frame: data.length - 1,
                snap: "frame",
                ease: `none`,
                scrollTrigger: {
                    trigger: scrollCanvas,
                    pin: true,
                    scroller: scroll?.el,
                    start: `top top`,
                    end: `250% top`,
                    scrub: .5,
                },
                onUpdate: render,
            });
        }

    }

    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            const img = new Image();
            img.src = data[i];
            images.push(img)
        }
        images[1].onload = render;
        createScroll()
        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update());
            ScrollTrigger.refresh();
        };
    }, [scrollCanvas])

    return (
        <CanvasWrapper ref={canvasRef}>
            <canvas></canvas>
        </CanvasWrapper>
    )
}

export default CanvasParallax