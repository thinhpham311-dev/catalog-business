import tw, { styled, css, theme } from 'twin.macro'

const LoadingWrapper = styled.div(() => [
    tw`fixed top-0 left-0 h-full w-full bg-primary text-white flex items-center justify-center z-50`,
    css`h1{
        ${tw`xl:text-4xl lg:text-3xl text-lg font-thin font-type-1`}
    }`
])

const LoadingProgressBar = styled.div(() => [
    tw`w-full h-[5px] absolute top-1/2 left-0 -translate-y-1/2 bg-white`
])

export {
    LoadingWrapper,
    LoadingProgressBar
}