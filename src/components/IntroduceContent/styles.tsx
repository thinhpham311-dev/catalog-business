import tw, { styled, css } from 'twin.macro'

const IntroduceContentWrapper = styled.div(() => [
    tw`relative h-[100vh] w-full bg-primary-2`,
    css`
        .content{
            ${tw`h-full w-[60%] relative left-[40%]`}
            &-inner{
                ${tw`flex items-start flex-col h-[33.3%] w-full font-type-1 text-white`}
                h1{
                    ${tw`text-[2vw]`}
                }
                p{
                    ${tw`mt-[2vw] text-[1.3vw] w-[80%]`}
                }
            }
        }
    `
])

export {
    IntroduceContentWrapper
}