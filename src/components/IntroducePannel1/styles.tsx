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
                ${tw`text-white mb-[2vw] xl:text-3xl lg:text-2xl text-lg  font-thin`}
            }
            button{
                ${tw`py-[20px] px-[30px] rounded-full border-0 bg-white text-primary-2 xl:text-4xs lg:text-4xs text-5xs`}
            }
        }
    `
])

export {
    PannerIntroducesWrapper
}