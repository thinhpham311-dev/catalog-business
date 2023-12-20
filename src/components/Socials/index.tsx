'use client'
import React from 'react'
import { SocialsWrapper } from "./styles"
import { FiArrowUpRight } from "react-icons/fi";
import Books from "./books"


const Socials = (props: any) => {
    return (
        <>
            <Books />
            <SocialsWrapper className="item">
                <div className="socials-inner">
                    <div className="container">
                        <h1>Twitter</h1>
                        <FiArrowUpRight />
                        <div className="center"></div>
                    </div>
                </div>
                <div className="socials-inner">
                    <div className="container">
                        <h1>LinkedIn</h1>
                        <FiArrowUpRight />
                        <div className="center"></div>
                    </div>
                </div>
                <div className="socials-inner">
                    <div className="container">
                        <h1>Instagram</h1>
                        <FiArrowUpRight />
                        <div className="center"></div>
                    </div>
                </div>
            </SocialsWrapper>
        </>
    )
}

export default Socials