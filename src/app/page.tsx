'use client'
import { dataImagesCertify, dataImagesConnection, dataImagesIncrease } from "@/constants"
import {
  Hero, Contents,
  Canvas, IntroducePannel1, IntroducePannel2, IntroduceContent
} from '@/components'

const Home = () => {
  return (
    <>
      <Hero />
      <Contents
        _bg="primary-2"
        subTitle="CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT®)"
        title="The Digital Twin Token is a unique digital asset backed by property data. Magma combines your building’s components and systems essential information into a DTT®."
      />
      <Canvas isCircle={false} data={dataImagesCertify} />
      <Contents
        subTitle="CONNECT THE BUILDING'S TWIN TO YOUR STAKEHOLDERS"
        title="Users connect directly to the DTT® without any intermediaries. As Stakeholder, they have the power to upload and verify information that enriches the Digital Twin Token. A Stakeholder's ability to access validated-data to perform tasks depends on their specific role."
      />
      <Canvas isCircle={false} data={dataImagesConnection} />
      <Contents
        _bg="primary-2"
        subTitle="INCREASE YOUR DIGITAL TWIN TOKEN’S VALUE"
        title="DTT® data increases the value of your digital asset by lowering operational costs, improving energy use, assisting commercialization, and boosting the liquidity of your building."
      />
      <Canvas data={dataImagesIncrease} isCircle={true} />
      <IntroducePannel1 />
      <IntroducePannel2 />
      <IntroduceContent />
    </>
  )
}

export default Home
