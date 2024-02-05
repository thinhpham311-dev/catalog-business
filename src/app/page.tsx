'use client'
import { dataImagesCertify, dataImagesConnection, dataImagesIncrease, dataImageBranchs } from "@/constants"
import {
  Navbar,
  Hero,
  Contents,
  Canvas,
  IntroducePannel1,
  IntroducePannel2,
  IntroduceContent,
  Posts, Branchs,
  Socials,
  Footer
} from '@/components'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Contents
        _bg="primary-2"
        subTitle="CERTIFY&nbsp;YOUR&nbsp;BUILDING&nbsp;AS&nbsp;A&nbsp;DIGITAL&nbsp;TWIN&nbsp;TOKEN&nbsp;&nbsp;(DTT®)"
        title="The Digital Twin Token is a unique digital asset backed by property data. Magma combines your building’s components and systems essential information into a DTT®."
      />
      <Canvas numbers={null} isCircle={false} data={dataImagesCertify} />
      <Contents
        subTitle="CONNECT&nbsp;THE&nbsp;BUILDING'S&nbsp;TWIN&nbsp;TO&nbsp;YOUR&nbsp;STAKEHOLDERS"
        title="Users connect directly to the DTT® without any intermediaries. As Stakeholder, they have the power to upload and verify information that enriches the Digital Twin Token. A Stakeholder's ability to access validated-data to perform tasks depends on their specific role."
      />
      <Canvas numbers={null} isCircle={false} data={dataImagesConnection} />
      <Contents
        _bg="primary-2"
        subTitle="INCREASE&nbsp;YOUR&nbsp;DIGITAL&nbsp;TWIN&nbsp;TOKEN’S&nbsp;VALUE"
        title="DTT® data increases the value of your digital asset by lowering operational costs, improving energy use, assisting commercialization, and boosting the liquidity of your building."
      />
      <Canvas numbers={60} data={dataImagesIncrease} isCircle={true} />
      <IntroducePannel1 />
      <IntroducePannel2 />
      <IntroduceContent />
      <Posts />
      <Branchs data={dataImageBranchs} />
      <Socials />
      <Footer />
    </>

  )
}

export default Home
