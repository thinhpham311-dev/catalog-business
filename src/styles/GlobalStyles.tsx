'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import FontsCss from './fonts.css'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  ${FontsCss}
  html, body, *{
    ${tw`p-0 m-0 box-border overflow-x-hidden`}
  }
  body{
    ${tw`bg-primary font-type-1 overflow-x-hidden`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
