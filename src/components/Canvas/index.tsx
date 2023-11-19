'use client'
import React from 'react'
import { CanvasWrapper } from './styles'
import { CanvasParallax } from '@/components'

const Canvas = (props: any) => (
    <CanvasWrapper id="section-canvas" >
        <CanvasParallax dataImages={props.data} />
    </CanvasWrapper>
)

export default Canvas