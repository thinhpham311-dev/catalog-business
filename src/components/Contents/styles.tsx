import tw, { styled, css } from 'twin.macro'

interface styleProps {
    $_bg: string
}

const ContentWrapper = styled.section<styleProps>(({ $_bg }) => {
    return [
        tw`flex items-start justify-center flex-col h-[auto] w-full relative xl:pt-[20vh] lg:pt-[15vh] md:pt-[15vh] pt-[10vh] pb-0 text-white bg-primary-2 relative`,
        css`
       
    h2{
        ${tw`mb-[3vh] font-thin font-type-1 xl:text-4xs lg:text-4xs text-5xs`}
    }
    h1{
        ${tw` leading-[120%] w-full h-full xl:text-2xl lg:text-xl md:text-md text-xs font-thin font-type-1 xl:tracking-normal tracking-tighter my-0`}
    }
    `, chooseBg($_bg)]
})

const chooseBg = (param: string) => {
    switch (param) {
        case "primary-1":
            return tw`bg-primary-1`
        case "primary-2":
            return tw`bg-primary-2`
        case "primary-3":
            return tw`bg-primary-3`
        default:
            tw`bg-primary`
    }
}

export {
    ContentWrapper
}