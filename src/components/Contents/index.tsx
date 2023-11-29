'use client'
import React from 'react'
import { ContentWrapper } from "./styles"
import { TextParallax } from "@/components"

const Contents = (props: any) => {
    return (
        <ContentWrapper $_bg={props._bg} >
            <div className="container">
                <h2>{props.subTitle}</h2>
                <TextParallax>{props.title}</TextParallax>
            </div>
        </ContentWrapper >
    )
}

export default Contents