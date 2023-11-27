'use client'
import React from 'react'
import Image from 'next/image'
import { CiMenuBurger } from 'react-icons/ci'
import { NavbarWrapper } from './styles'
import NavbarHamburger from './NavbarHamburger'

const Navbar = () => (
    <NavbarWrapper data-scroll data-scroll-sticky data-scroll-position={`0 0`} data-scroll-target="#main">
        <Image
            src="/logoMagma.png"
            width={100}
            height={100}
            alt="Picture of the author"
        />
        <div className="right-navbar--button" id="right-nav">
            <button className="right-navbar--button-demo" type="button"><span>Book a Demo</span></button>
            {/* <button className="right-navbar--button-menu" type="button"><CiMenuBurger /></button> */}
            <NavbarHamburger />
        </div>
    </NavbarWrapper>
)

export default Navbar