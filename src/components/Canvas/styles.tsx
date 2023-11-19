import tw, { styled, css } from 'twin.macro'

const CanvasWrapper = styled.div(() => [
    tw`relative w-full h-[350vh] bg-primary-2`,
    css`
        .inner-canvas{
         ${tw`relative w-full h-[100vh] `}
        }
        canvas{
            ${tw`relative max-w-full max-h-[100vh]`}
        }
    `
])

export {
    CanvasWrapper
}