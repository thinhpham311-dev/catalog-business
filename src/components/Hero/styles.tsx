import tw, { styled, css, theme } from 'twin.macro'

const NavbarWrapper = styled.nav(() => [
    tw`flex items-center justify-between py-0 px-[4vw] absolute h-[12vh] w-full z-50`,
    css`
        img{
            ${tw`xl:w-[70px] h-[auto] w-[50px]`}
        }
        .right-navbar--button{
            ${tw`flex gap-x-[10px]`}
            button{
                ${tw`py-[10px] font-type-1 px-[20px] text-white text-[20px] rounded-full border-[0.5px] border-white`}
            }
            &-demo{
                ${tw`xl:block hidden`}
            }
        }
    `
])

const HeroWrapper = styled.div(() => [
    tw`w-full h-[100vh] relative`,
    css`
        video{
            ${tw`object-cover w-full h-full`}
        }
    `
])

const HeroBottom = styled.div(() => [
    tw`absolute  xl:bottom-0 bottom-[15%] left-0 h-[auto] my-[10vh] w-full`,
    css`
    .container{
        ${tw`container mx-auto px-[4vw]`}
    }
        h1{
            ${tw`font-type-1 font-thin xl:text-[7vw] lg:text-[6vw] md:text-[10vw] text-[13vw] leading-[1.1] text-white my-[3vh]`}
        }
        .hero--bottom-inner{
            ${tw`block xl:flex items-center justify-between xl:w-1/2 w-full`}
            &--text{
                ${tw` xl:text-[1.3vw] lg:text-[2vw] md:text-[3vw] text-[5vw] text-white font-type-1 font-thin`}
                br{
                    ${tw`xl:block lg:block md:block hidden`}
                }
            }
            &--button{
                ${tw`my-[3vh] xl:px-[3vw] px-[10vw] py-[1.5vh] bg-white text-primary-1 xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] font-type-2 rounded-full`}
            }
        }
    `
])

export {
    NavbarWrapper,
    HeroWrapper,
    HeroBottom
}