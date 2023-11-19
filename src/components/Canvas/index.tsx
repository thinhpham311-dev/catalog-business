'use client'
import React from 'react'
import { CanvasWrapper } from './styles'
import { CanvasParallax, Circle } from '@/components'

interface canvasProps {
    isCircle: boolean,
    data: string[]
}

const Canvas = ({ isCircle, data }: canvasProps) => (
    <CanvasWrapper id="section-canvas" >
        <CanvasParallax isElCircle={isCircle && <Circle />} dataImages={data} />
    </CanvasWrapper>
)

export default Canvas