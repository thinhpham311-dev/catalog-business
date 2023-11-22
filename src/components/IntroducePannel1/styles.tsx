import tw, { styled, css } from 'twin.macro'

const PannerIntroducesWrapper = styled.div(() => [
    tw`relative h-[100vh] w-full bg-primary-2 z-10`,
    css`
        video{
            ${tw`h-full w-full object-cover `}
        }
        .content-bottom{
            ${tw`absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center font-type-1 z-50 xl:w-[auto] w-full`}
            h1{
                ${tw`text-white mb-[2vw] xl:text-[5vw] text-[10vw] font-thin`}
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