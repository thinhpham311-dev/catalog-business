'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { navColors } from "@/constants"
import { NavbarWrapper } from './styles'
import { Button, Menu } from "@/components"


const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const btnHamburger = navRef.current?.querySelector("button")
        const btnHamburgerEl = btnHamburger as HTMLButtonElement
        const sections = gsap.utils.toArray("section")


        sections.forEach((section: any, index: number) => {
            console.log(section.height)
            ScrollTrigger.create({
                trigger: section,
                start: "top 6%",
                end: "bottom 6%",
                animation: gsap.to(btnHamburgerEl, { backgroundColor: navColors[index], immediateRender: false }),
                toggleActions: "restart none none reverse",
            })
        })
        return () => {
            ScrollTrigger.refresh();
        };
    }, [])

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