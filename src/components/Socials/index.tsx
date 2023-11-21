'use client'
import React from 'react'
import { SocialsWrapper } from "./styles"
import { FiArrowUpRight } from "react-icons/fi";
import Books from "./books"


const Socials = (props: any) => {
    return (
        <>
            <Books />
            <SocialsWrapper>
                <div className="socials-inner">
                    <h1>Twitter</h1>
                    <FiArrowUpRight />
                    <div className="center"></div>
                </div>
                <div className="socials-inner">
                    <h1>LinkedIn</h1>
                    <FiArrowUpRight />
                    <div className="center"></div>
                </div>
                <div className="socials-inner">
                    <h1>Instagram</h1>
                    <FiArrowUpRight />
                    <div className="center"></div>
                </div>
            </SocialsWrapper>
        </>
    )
}

export default Socials