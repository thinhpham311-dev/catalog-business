import tw, { styled, css } from 'twin.macro'

const IntroducePannel2Wrapper = styled.div(() => [
    tw`flex relative h-[100vh] w-full bg-primary-2`,
    css`
        .content-left{
            ${tw`h-full w-[40%] relative font-type-1`}
            h1{
                ${tw`absolute top-[40%] right-[5%] -translate-y-1/2 text-[5vw] font-thin text-white leading-[1]`}
            }
        }
        .content-right{
            ${tw`h-full w-[60%] relative `}
            &--center {
                ${tw`h-[50%] w-[85%] rounded-[10px] absolute top-1/2 -translate-y-1/2 bg-cover bg-hero-pattern left-[5%]`}
            }
        }
    `
])

export {
    IntroducePannel2Wrapper
}