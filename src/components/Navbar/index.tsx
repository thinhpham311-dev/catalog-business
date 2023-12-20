'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { navColors } from "@/constants"
import { NavbarWrapper } from './styles'
import { Button, Menu } from "@/components"

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const { scroll } = useLocomotiveScroll();
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const btnHamburger = navRef.current?.querySelector("button")
        const btnHamburgerEl = btnHamburger as HTMLButtonElement
        const sections = gsap.utils.toArray("section.item")
        sections.forEach((section: any, index: number) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 6%",
                end: "bottom 6%",
                scroller: scroll?.el,
                animation: gsap.to(btnHamburgerEl, { backgroundColor: navColors[index] }),
                toggleActions: "restart none none reverse",
            })
        })
    }, [navRef])



    return (
        <NavbarWrapper data-scroll data-scroll-sticky data-scroll-target="#main">
            <Image
                className="img-logo"
                src="/logoMagma.png"
                width={100}
                height={100}
                alt="Picture of the author"
            />
            <div className="right-navbar--button" id="right-nav">
                <Button type="button" className="btn-demo" $isSmall $variant="transparent">Book a Demo</Button>
                <div ref={navRef} className="navbar-hamburger-menu">
                    <Menu />
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar