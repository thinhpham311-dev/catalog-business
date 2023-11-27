'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from "gsap";
import { ButtonHamburgerWrapper, MenuHamburgerWrapper } from './styles'

const NavbarHamburger = () => {
    const [menuTl] = useState(gsap.timeline({ paused: true }));

    const menuBars: any = {};

    useEffect(() => {
        menuTl
            .to(menuBars.topBar, {
                duration: 0.2,
                x: 52,
                stroke: "#fff",
                rotation: 45
            })
            .to(menuBars.middleBar, { duration: 0.2, alpha: 0 }, 0)
            .to(menuBars.bottomBar, { duration: 0.2, x: 52, stroke: "#fff", rotation: -45 }, 0)
            .to(menuBars.btnToggle, { backgroundColor: "#1137ca", duration: 0.3, delay: 0.1 }, 0)
            .to(menuBars.menuWrapper, { display: "block", duration: 0.2, }, 0)
            .to(menuBars.menuOverlap, { opacity: 1, display: "block", duration: 0.2, delay: 0.1 }, 0)
            .to(menuBars.menuContent, { x: 0, duration: 0.3, delay: 0.1 }, 0)
            .reverse();
    }, []);

    const handleToggleMenu = () => {
        menuTl.reversed(!menuTl.reversed())
    }
    return (
        <>
            <ButtonHamburgerWrapper ref={e => (menuBars["btnToggle"] = e)} onClick={handleToggleMenu}>
                <svg
                    className="menu-btn"
                    viewBox="0 0 384 276"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="16"
                        y1="17"
                        x2="368"
                        y2="17"
                        ref={e => (menuBars["topBar"] = e)}
                    />
                    <line
                        x1="16"
                        y1="139.2"
                        x2="368"
                        y2="139.2"
                        ref={e => (menuBars["middleBar"] = e)}
                    />
                    <line
                        x1="16"
                        y1="261"
                        x2="368"
                        y2="261"
                        ref={e => (menuBars["bottomBar"] = e)}
                    />
                </svg>
            </ButtonHamburgerWrapper>
            <MenuHamburgerWrapper ref={e => (menuBars["menuWrapper"] = e)} >
                <div className="menu-overlap" ref={e => (menuBars["menuOverlap"] = e)} onClick={handleToggleMenu}></div>
                <div className='menu-content' ref={e => (menuBars["menuContent"] = e)}>
                    <ul className='menu-list'>
                        <li>
                            <Link href='' className='menu-link title'>Product</Link>
                        </li>
                        <li>
                            <Link href='' className='menu-link title'>Mission</Link>
                        </li>
                        <li>
                            <Link href='' className='menu-link title'>Blog</Link>
                        </li>
                        <li>
                            <Link href='' className='menu-link title'>FAQ</Link>
                        </li>
                        <li>
                            <Link href='' className='menu-link title'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </MenuHamburgerWrapper>
        </>
    )
}

export default NavbarHamburger