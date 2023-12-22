'use client'
import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PannerIntroducesWrapper } from "./styles"
import { Button, TextParallaxRotate } from "@/components"

gsap.registerPlugin(ScrollTrigger);

const IntroducesPannel1 = () => {
    const { scroll } = useLocomotiveScroll();
    const scrollEls: any = {};

    return (
        <PannerIntroducesWrapper className="item"  >
            <div className="content-bottom">
                <TextParallaxRotate>Magma DTT®</TextParallaxRotate>
                <Button type="button" $variant='light'>LEARN MORE</Button>
            </div>
            <video ref={e => (scrollEls["video"] = e)} src="https://thisismagma.com/wp-content/themes/magma/assets/home/glass/1.webm?2" autoPlay loop muted></video>
        </PannerIntroducesWrapper>
    )
}

export default IntroducesPannel1