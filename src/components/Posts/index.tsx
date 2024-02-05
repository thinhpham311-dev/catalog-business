'use client'
import React from 'react'
import Image from 'next/image'
import { PostsWrapper } from "./styles"
import { Button } from "@/components"
import { FiArrowRight } from "react-icons/fi";


const Posts = () => (
    <PostsWrapper className="item" >
        <div className="container">
            <h1 className="post-title">Recent Blog</h1>
            <div className="post-inner">
                <div className="post-inner--left">
                    <Image src="/magma-a-la-3eme-edition-du-tech-talk-de-cbre-france-1684942208038.jpeg" height={500} width={500} alt="" />
                </div>
                <div className="post-inner--right">
                    <h4>MAY 30,2023</h4>
                    <h1>Magma At CBRE France's 3rd Tech Talk</h1>
                </div>
            </div>
            <div className="post-inner">
                <div className="post-inner--left">
                    <Image src="/workshop-blockchain-et-actif-digitaux-sba-16-min-scaled.jpg" height={500} width={500} alt="" />
                </div>
                <div className="post-inner--right">
                    <h4>MAY 30,2023</h4>
                    <h1>Magma At CBRE France's 3rd Tech Talk</h1>
                </div>
            </div>
            <div className="post-inner">
                <div className="post-inner--left">
                    <Image src="/exploring-the-potential-of-real-estate-tokenization-digital-twins-magma.png" height={500} width={500} alt="" />
                </div>
                <div className="post-inner--right">
                    <h4>MAY 30,2023</h4>
                    <h1>Magma At CBRE France's 3rd Tech Talk</h1>
                </div>
            </div>
        </div>

        <div className="container">
            <Button type="button" className="btn-view-all" $variant='primary' >VIEW ALL <FiArrowRight /></Button>
        </div>
    </PostsWrapper>
)

export default Posts