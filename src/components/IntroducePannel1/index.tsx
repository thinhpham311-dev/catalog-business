'use client'
import React from 'react'
import { PannerIntroducesWrapper } from "./styles"
import { Button } from "@/components"

const IntroducesPannel1 = () => (
    <>
        <PannerIntroducesWrapper>
            <div className="content-bottom">
                <h1>Magma DTT®</h1>
                <Button type="button" $variant='light'>LEARN MORE</Button>
            </div>
            <video src="https://thisismagma.com/wp-content/themes/magma/assets/home/glass/1.webm?2" autoPlay loop muted></video>
        </PannerIntroducesWrapper>
    </>
)

export default IntroducesPannel1