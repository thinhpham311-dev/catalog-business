import tw, { styled, css } from 'twin.macro'

const PannerIntroducesWrapper = styled.section(() => [
    tw`relative h-[100vh] w-full bg-primary-2 z-10`,
    css`
        video{
            ${tw`h-full w-full object-cover `}
        }
        .content-bottom{
            ${tw`absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center font-type-1 z-50 xl:w-[auto] w-full`}
            h2{
                ${tw`text-white mb-[2vh] xl:text-3xl lg:text-2xl text-md  font-thin`}
            }
        }
    `
])

export {
    PannerIntroducesWrapper
}