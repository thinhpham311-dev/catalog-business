import tw, { styled, css } from 'twin.macro'

const PannerIntroducesWrapper = styled.div(() => [
    tw`relative h-[100vh] w-full bg-primary-2`,
    css`
        video{
            ${tw`h-full w-full object-cover`}
        }
        .content-bottom{
            ${tw`absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center font-type-1`}
            h1{
                ${tw`text-white mb-[2vw] text-[5vw] font-thin`}
            }
            button{
                ${tw`py-[20px] px-[30px] rounded-full border-0 bg-white text-primary-2`}
            }
        }
    `
])

export {
    PannerIntroducesWrapper
}