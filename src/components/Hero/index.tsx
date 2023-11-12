'use client'
import React from 'react'
import { HeroWrapper, HeroBottom } from './styles'
import Navbar from './navbar'

const Hero = () => (
    <HeroWrapper data-scroll data-scroll-speed="-5" id="hero">
        <Navbar />
        <HeroBottom>
            <h1>Experience Real  <br /> Estate Agility</h1>
            <div className="hero--bottom-inner">
                <h4 className="hero--bottom-inner--text">Create a digital twin of your existing building <br /> and release the potential of Web3.</h4>
                <button className="hero--bottom-inner--button" type="button">LEARN MORE</button>
            </div>
        </HeroBottom>
        <video src="./1.mp4" autoPlay loop muted ></video>
    </HeroWrapper>
)

export default Hero