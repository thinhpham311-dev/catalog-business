import tw, { styled, css } from 'twin.macro'

const IntroducePannel2Wrapper = styled.section(() => [
    tw`xl:pt-[20vh] pt-[10vh] w-full bg-primary-2 `,
    css`
        .container{
           ${tw`flex flex-wrap container mx-auto px-[4vw]`} 
        }
        .content-left{
            ${tw`h-full xl:w-[40%] w-full font-type-1 xl:mx-0 lg:my-[5vh] mb-[3vh]`}
            h1{
                ${tw`xl:text-3xl lg:text-2xl text-lg font-thin text-white leading-[100%]`}
            }
        }
        .content-right{
            ${tw`h-full xl:w-[60%] w-full xl:px-0 `}
            &--center {
                ${tw`w-full rounded-[10px] bg-cover bg-hero-pattern bg-center xl:h-[50vh] h-[30vh]`}
            }
        }
    `
])

export {
    IntroducePannel2Wrapper
}