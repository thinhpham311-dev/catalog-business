import tw, { styled, css } from 'twin.macro'


const ContentWrapper = styled.div(() => [
    tw`flex items-start justify-center flex-col h-[100vh] w-[100vw] relative py-0 px-[8vw] text-white bg-primary-2`,
    css`
    h2{
        ${tw`mb-[3vw] font-thin font-type-1 text-2xl`}
    }
    h1{
        ${tw`font-thin leading-[1.3] w-[90%] text-[4vw] text-secondary font-type-1`}
    }
    `
])

export {
    ContentWrapper
}