import tw, { styled, css } from 'twin.macro'


const CanvasWrapper = styled.div(() => [
    tw`relative w-full h-[100vh]`,
    css`
        canvas{
            ${tw`relative w-full h-[100vh]`}
        }
    `
])

export {
    CanvasWrapper
}