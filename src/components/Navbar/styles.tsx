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
                ${tw`xl:text-4xs lg:text-4xs text-5xs xl:text-4xs lg:text-4xs text-5xs font-thin font-type-1 py-[10px]  px-[20px] text-white text-[20px] rounded-full border-[0.5px] border-white`}
            }
            &-demo{
                ${tw`lg:block hidden`}
            }
        }
    `
])

export {
    NavbarWrapper
}