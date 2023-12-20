'use client'
import React from 'react'
import { CanvasWrapper } from './styles'
import { CanvasParallax, Circles } from '@/components'

interface canvasProps {
    isCircle: boolean,
    data: string[]
    numbers: number | null
}

const Canvas = ({ isCircle, data, numbers }: canvasProps) => (
    <CanvasWrapper className="item" id="section-canvas" >
        <CanvasParallax isElCircle={isCircle && <Circles countNumber={numbers} />} dataImages={data} />
    </CanvasWrapper>
)

export default Canvas