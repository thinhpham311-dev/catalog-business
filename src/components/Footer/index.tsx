'use client'
import React from 'react'
import { FooterWrapper } from "./styles"
import { HiArrowRight } from "react-icons/hi2";


const Footer = () => (
    <FooterWrapper>
        <div className="container">
            <div className="footer-inner">
                <div className="footer-inner--menu">
                    <div><a href="">Mission</a></div>
                    <div><a href="">Contact</a></div>
                    <div><a href="">Product</a></div>
                    <div><a href="">Privacy Policy</a></div>
                    <div><a href="">Blog</a></div>
                    <div><a href="">Terms</a></div>
                    <div><a href="">FAQ</a></div>
                </div>
                <div className="footer-inner--form">
                    <form>
                        <label className="form-label" htmlFor="email">Subscribe</label>
                        <div className="form-group-inline">
                            <input type="email" id="email" placeholder='Email' className="input-field" />
                            <button type="button"><HiArrowRight /></button>
                        </div>
                    </form>
                </div>
                <div className="copy-right"><span>© 2023 by MAGMA</span></div>
            </div>
        </div>
    </FooterWrapper>
)

export default Footer