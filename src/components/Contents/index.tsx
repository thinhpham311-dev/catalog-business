'use client'
import React from 'react'
import { ContentWrapper } from "./styles"
import { TextParallax } from "@/components"

const Contents = (props: any) => {
    return (
        <ContentWrapper $_bg={props._bg}>
            <h2>{props.subTitle}</h2>
            <TextParallax>{props.title}</TextParallax>
        </ContentWrapper >
    )
}

export default Contents