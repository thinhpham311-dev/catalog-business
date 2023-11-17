'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import FontsCss from './fonts.css'
import tw, { GlobalStyles as BaseStyles, styled, css } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  ${FontsCss}
  html, body{
    ${tw`w-full h-full`}
  }
  *{
    ${tw`p-0 m-0 box-border`}
  }
  main{
    ${tw`relative overflow-hidden bg-primary`}
  }
`

export const ContentWrapper = styled.div(() => [
  tw`flex items-start justify-center flex-col h-[100vh] w-[100vw] relative py-0 px-[8vw] text-white bg-primary-2`,
  css`
  h2{
      ${tw`mb-[3vw] font-thin font-type-1 text-2xl`}
  }
  h1{
      ${tw`font-thin leading-[1.3] w-[90%] text-[4vw] text-secondary font-type-1`}
  }
  `
])

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
