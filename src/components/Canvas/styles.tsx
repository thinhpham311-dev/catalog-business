import tw, { styled, css } from 'twin.macro'

const CanvasWrapper = styled.div(() => [
    tw`relative w-full h-[350vh] bg-primary-2`,
    css`
        .inner-canvas{
         ${tw`relative w-full h-[100vh] `}
            .circle{
                ${tw`flex items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] h-[30vw] w-[30vw] rounded-full border-2 border-white`}
                &-inner{
                    ${tw`h-[70%] w-[70%] rounded-full bg-transparent border-2 border-white`}
                }
            }
        }
        canvas{
            ${tw`relative max-w-full max-h-[100vh]`}
        }
    `
])

export {
    CanvasWrapper
}