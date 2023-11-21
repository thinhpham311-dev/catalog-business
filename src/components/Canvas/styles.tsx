import tw, { styled, css } from 'twin.macro'

const CanvasWrapper = styled.div(() => [
    tw`relative w-full h-[350vh] bg-primary-2`,
    css`
        .inner-canvas{
         ${tw`relative w-full h-[100vh] `}
            .circle{
                ${tw`flex items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] h-[34vw] w-[34vw] rounded-full border-[0.5px] border-[#ffffff3b] z-50`}
                &-inner{
                    ${tw`h-[50%] w-[50%] flex items-center justify-center rounded-full bg-transparent border-[0.5px] border-white`}
                    &--text{
                        ${tw`text-center text-white font-type-1`}
                        h1{
                            ${tw`text-[3vw] opacity-[0.8] font-thin`}
                        }
                    }     
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