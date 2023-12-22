import tw, { styled, css, theme } from 'twin.macro'



const LoadingWrapper = styled.div(() => [
    tw`h-full w-full  flex justify-center flex-col items-center absolute top-0 left-0 bg-transparent z-50`
])


const Overlay = styled.div(() => [
    tw`absolute h-[2px] top-0 left-0 z-10 w-full flex`,
    css`.bar{
        ${tw`w-1/5 h-[105vh] bg-primary shadow-[rgba(0, 0, 0, 0.16) 0px 1px 4px]`}
    }`
])

const Count = styled.h1(() => [
    tw`xl:text-2xl lg:text-xs text-md font-thin text-white text-center font-type-1 z-[99] opacity-100 overflow-hidden`
])

export {
    LoadingWrapper,
    Overlay,
    Count
}