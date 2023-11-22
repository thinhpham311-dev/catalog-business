import tw, { styled, css } from 'twin.macro'

const IntroduceContentWrapper = styled.div(() => [
    tw`relative pb-[10vh] pt-[5vh] h-[auto] w-full bg-primary-2`,
    css`
        .container{
            ${tw`container mx-auto px-[4vw]`}
        }
        .content{
            ${tw`h-full xl:w-[70%] w-full relative xl:left-[40%]`}
            &-inner{
                ${tw`flex items-start xl:mb-0 my-[5vh] flex-col h-[33.3%] w-full font-type-1 text-white`}
                h1{
                    ${tw`xl:text-[2.25vw] text-[7vw] font-bold`}
                }
                p{
                    ${tw`mt-[2vw] xl:text-[1.3vw] text-[5vw] xl:w-[80%] w-full`}
                }
            }
        }
    `
])

export {
    IntroduceContentWrapper
}