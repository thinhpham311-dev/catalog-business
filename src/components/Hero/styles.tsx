import tw, { styled, css, theme } from 'twin.macro'

const NavbarWrapper = styled.nav(() => [
    tw`flex items-center justify-between py-0 px-[30px] absolute h-[10vh] w-full z-50`,
    css`
        img{
            ${tw`mt-[-1.7vw] w-[9%]`}
        }
        .right-navbar--button{
            ${tw`flex gap-x-[10px]`}
            button{
                ${tw`py-[10px] font-type-1 px-[20px] text-white text-[20px] rounded-full border-2 border-white`}
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
    tw`absolute h-[35vh] w-[50vw] left-[10%] bottom-[5%] `,
    css`
        h1{
            ${tw`font-type-1 font-thin text-[5vw] h-[75%] leading-none text-white overflow-hidden`}
        }
        .hero--bottom-inner{
            ${tw`h-[35%] w-full absolute bottom-0 flex items-center justify-between`}
            &--text{
                ${tw`text-[1.3vw] text-white font-type-1 font-thin`}
            }
            &--button{
                ${tw`py-[10px] px-[20px] bg-white text-primary-1 text-[21px] font-type-2 rounded-full`}
            }
        }
    `
])

export {
    NavbarWrapper,
    HeroWrapper,
    HeroBottom
}