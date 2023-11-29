import tw, { styled, css, theme } from 'twin.macro'


const HeroWrapper = styled.section(() => [
    tw`w-full h-[100vh] relative`,
    css`
        video{
            ${tw`object-cover w-full h-full`}
        }
    `
])

const HeroBottom = styled.div(() => [
    tw`absolute z-10 xl:bottom-0  lg:bottom-0 xl:translate-y-0 lg:translate-y-0 bottom-1/2 translate-y-1/2 left-0 h-[auto] xl:py-[10vh] py-0 w-full`,
    css`
    .container{
        ${tw`container mx-auto px-[4vw]`}
    }
        h1{
            ${tw`xl:text-4xl lg:text-3xl text-lg font-thin leading-[120%]   font-type-1 font-thin  text-white xl:mb-[4vh] mb-[3vh]`}
            br{
                ${tw`sm:block hidden`}
            }
        }
        .hero--bottom-inner{
            ${tw`block xl:flex gap-x-[30px] items-center justify-between xl:w-[60%] w-full `}
            &--text{
                ${tw`xl:text-3xs lg:text-3xs text-4xs text-white font-type-1 font-thin xl:mb-0 mb-[5vh]`}
                br{
                    ${tw`xl:block lg:block md:block hidden`}
                }
            }
        }
    `
])

export {
    HeroWrapper,
    HeroBottom
}