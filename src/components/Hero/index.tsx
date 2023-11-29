'use client'
import React from 'react'
import { HeroWrapper, HeroBottom } from './styles'
import { Button } from "@/components"


const Hero = () => (
    <>
        <HeroWrapper data-scroll data-scroll-speed="-5" id="hero">
            <HeroBottom>
                <div className="container">
                    <h1>Experience Real  <br /> Estate Agility</h1>
                    <div className="hero--bottom-inner">
                        <h4 className="hero--bottom-inner--text">Create a Digital Twin Token (DTT®) of your <br /> existing building   and release the potential of<br /> Web3.</h4>
                        <Button type="button" $variant='light'>LEARN MORE</Button>
                    </div>
                </div>
            </HeroBottom>
            <video src="./1.mp4" autoPlay loop muted ></video>
        </HeroWrapper>
    </>
)

export default Hero