import tw, { styled, css, theme } from 'twin.macro'


const HeroWrapper = styled.section(() => [
    tw`w-full h-dvh relative`,
    css`
        video{
            ${tw`object-cover w-full h-full`}
        }
    `
])

const HeroBottom = styled.div(() => [
    tw`absolute z-10 xl:bottom-0  xl:translate-y-0  bottom-1/2 translate-y-1/2 left-0 h-[auto] xl:py-[10vh] py-0 w-full`,
    css`
        h1{
            ${tw`xl:text-3xl lg:text-2xl text-lg font-thin leading-[120%]   font-type-1 font-thin  text-white xl:mb-[4vh] mb-[3vh]`}
            br{
                ${tw`sm:block hidden`}
            }
        }
        .hero--bottom-inner{
            ${tw`flex items-center xl:justify-between lg:justify-between md:justify-between justify-center flex-wrap relative w-full`}
            &-content{
                ${tw`xl:flex gap-x-[30px] items-start justify-between xl:w-[55%] w-full`}
                &--text{
                    ${tw` text-4xs text-white font-type-1 font-thin xl:mb-0 mb-[5vh]`}
                    br{
                        ${tw`xl:block lg:block md:block hidden`}
                    }
                }
            }
            .btn-scrolldown{
                ${tw` uppercase xl:mb-0 mb-[-150px]`}
                svg{
                    ${tw`mx-auto text-2xs`}
                }
            }
        }
    `
])

export {
    HeroWrapper,
    HeroBottom
}