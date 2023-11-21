'use client'
import React from 'react'
import Image from 'next/image'
import { BranchWrapper } from "./styles"



const Branchs = (props: any) => {
    return (
        <BranchWrapper>
            <div className="branchs-inner">
                <h1>Featured In</h1>
                <p>Thrilled to have been featured in several prominent media <br /> outlets and leading professionals across the world’s best <br /> real estate and web3 institutions.</p>
            </div>
            <div className="branchs-list">
                <div className="branchs-sliders">
                    {props.data.map((image: string, index: number) => <div className="branchs-slide" key={index}>
                        <Image src={image} height={500} width={500} alt="" />
                    </div>
                    )}
                </div>
            </div>
        </BranchWrapper>
    )
}

export default Branchs