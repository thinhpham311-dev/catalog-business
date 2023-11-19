import tw, { styled, css } from 'twin.macro'

interface styleProps {
    $_bg: string
}

const ContentWrapper = styled.div<styleProps>(({ $_bg }) => {
    return [
        tw`flex items-start justify-center flex-col h-[100vh] w-[100vw] relative py-0 px-[8vw] text-white bg-primary-2`,
        css`
    h2{
        ${tw`mb-[3vw] font-thin font-type-1 text-2xl`}
    }
    h1{
        ${tw`font-thin leading-[1.3] w-[90%] text-[4vw] text-secondary font-type-1`}
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