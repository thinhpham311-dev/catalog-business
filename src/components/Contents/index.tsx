'use client'
import React from 'react'
import { ContentWrapper } from "./styles"
import { TextParallaxColor, TextParallaxRotate } from "@/components"

const Contents = (props: any) => {
    return (
        <ContentWrapper $_bg={props._bg} >
            <div className="container">
                <TextParallaxRotate>{props.subTitle}</TextParallaxRotate>
                <TextParallaxColor>{props.title}</TextParallaxColor>
            </div>
        </ContentWrapper >
    )
}

export default Contents