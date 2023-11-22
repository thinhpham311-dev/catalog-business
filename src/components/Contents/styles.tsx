import tw, { styled, css } from 'twin.macro'

interface styleProps {
    $_bg: string
}

const ContentWrapper = styled.div<styleProps>(({ $_bg }) => {
    return [
        tw`flex items-start justify-center flex-col xl:h-[100vh] h-[auto] w-[100vw] relative xl:py-0 py-[10vh] text-white bg-primary-2`,
        css`
        .container{
            ${tw`container mx-auto px-[4vw]`}
        }
    h2{
        ${tw`mb-[3vw] font-thin font-type-1 xl:text-2xl text-sm`}
    }
    h1{
        ${tw`font-thin leading-[1.3] w-full xl:text-[4vw] text-[7.5vw] text-secondary font-type-1`}
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