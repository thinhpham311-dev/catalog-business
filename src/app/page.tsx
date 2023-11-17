'use client'
// import { dataImages } from "@/constants"
import {
  Hero, Contents,
  // CanvasParallax
} from '@/components'

const Home = () => {
  return (
    <>
      <Hero />
      <Contents
        subTitle="CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT®)"
        title="The Digital Twin Token is a unique digital asset backed by property data. Magma combines your building’s components and systems essential information into a DTT®."
      />
      {/* <CanvasParallax data={dataImages} /> */}
      <Contents
        subTitle="CONNECT THE BUILDING'S TWIN TO YOUR STAKEHOLDERS"
        title="Users connect directly to the DTT® without any intermediaries. As Stakeholder, they have the power to upload and verify information that enriches the Digital Twin Token. A Stakeholder's ability to access validated-data to perform tasks depends on their specific role."
      />
      <Contents
        subTitle="INCREASE YOUR DIGITAL TWIN TOKEN’S VALUE"
        title="DTT® data increases the value of your digital asset by lowering operational costs, improving energy use, assisting commercialization, and boosting the liquidity of your building."
      />
    </>
  )
}

export default Home
