'use client'
import React from 'react'
import { PannerIntroducesWrapper } from "./styles"
import { Button, TextParallaxRotate } from "@/components"

const IntroducesPannel1 = () => {

    return (
        <PannerIntroducesWrapper className="item">
            <div className="content-bottom">
                <TextParallaxRotate>Magma DTT®</TextParallaxRotate>
                <Button type="button" $variant='light'>LEARN MORE</Button>
            </div>
            <video src="https://thisismagma.com/wp-content/themes/magma/assets/home/glass/1.webm?2" autoPlay loop muted></video>
        </PannerIntroducesWrapper>
    )
}

export default IntroducesPannel1