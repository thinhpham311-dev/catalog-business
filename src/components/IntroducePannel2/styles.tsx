import tw, { styled, css } from 'twin.macro'

const IntroducePannel2Wrapper = styled.div(() => [
    tw`pt-[5vh] w-full bg-primary-2 `,
    css`
        .container{
           ${tw`flex flex-wrap container mx-auto px-[4vw]`} 
        }
        .content-left{
            ${tw`h-full xl:w-[40%] w-full font-type-1 xl:mx-0 mx-[4vw] mb-[5vh]`}
            h1{
                ${tw`xl:text-[5vw] text-[16vw] font-thin text-white leading-[1]`}
            }
        }
        .content-right{
            ${tw`h-full xl:w-[60%] w-full xl:px-0  px-[4vw]`}
            &--center {
                ${tw`w-full rounded-[10px] bg-cover bg-hero-pattern bg-center xl:h-[50vh] h-[30vh]`}
            }
        }
    `
])

export {
    IntroducePannel2Wrapper
}