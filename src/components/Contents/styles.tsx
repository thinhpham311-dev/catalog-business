import tw, { styled, css } from 'twin.macro'

interface styleProps {
    $_bg: string
}

const ContentWrapper = styled.section<styleProps>(({ $_bg }) => {
    return [
        tw`flex items-start justify-center flex-col xl:h-[100vh] lg:h-[100vh] h-[auto] w-[100vw] relative xl:py-0 py-[10vh] text-white bg-primary-2`,
        css`
        .container{
            ${tw`container mx-auto px-[4vw]`}
        }
    h2{
        ${tw`mb-[3vh] font-thin font-type-1 xl:text-3xs lg:text-3xs text-5xs`}
    }
    h1{
        ${tw`font-thin leading-[120%] w-full xl:text-xl lg:text-lg text-2xs text-secondary font-type-1 xl:tracking-normal tracking-tighter`}
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