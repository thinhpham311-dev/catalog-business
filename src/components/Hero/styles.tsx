import tw, { styled, css, theme } from 'twin.macro'


const HeroWrapper = styled.div(() => [
    tw`w-full h-[100vh] relative`,
    css`
        video{
            ${tw`object-cover w-full h-full`}
        }
    `
])

const HeroBottom = styled.div(() => [
    tw`absolute xl:bottom-0  lg:bottom-0 xl:translate-y-0 lg:translate-y-0 bottom-1/2 translate-y-1/2 left-0 h-[auto] xl:py-[10vh] lg:py-[10vh] py-0 w-full`,
    css`
    .container{
        ${tw`container mx-auto px-[4vw]`}
    }
        h1{
            ${tw`xl:text-3xl lg:text-2xl text-lg font-thin leading-[100%]   font-type-1 font-thin  text-white my-[3vh]`}
            br{
                ${tw`sm:block hidden`}
            }
        }
        .hero--bottom-inner{
            ${tw`block xl:flex items-center justify-between xl:w-[60%] w-full`}
            &--text{
                ${tw`xl:text-3xs lg:text-3xs text-4xs text-white font-type-1 font-thin`}
                br{
                    ${tw`sm:block hidden`}
                }
            }
            &--button{
                ${tw`xl:text-4xs lg:text-4xs text-5xs my-[3vh] xl:px-[3vw] px-[10vw] py-[2.5vh] bg-white text-primary-1  font-type-2 rounded-full`}
            }
        }
    `
])

export {
    HeroWrapper,
    HeroBottom
}