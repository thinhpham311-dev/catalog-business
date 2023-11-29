'use client'
import React from 'react'
import { LoadingWrapper, LoadingProgressBar } from "./styles"

const Loading = () => (
    <LoadingWrapper>
        <h1>100%</h1>
        <LoadingProgressBar />
    </LoadingWrapper>
)

export default Loading