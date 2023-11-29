import tw, { styled, css, theme } from 'twin.macro'

const NavbarWrapper = styled.nav(() => [
    tw`flex items-center justify-between py-0 px-[4vw] fixed h-[12vh] w-full z-50`,
    css`
        img{
            ${tw`xl:w-[70px] h-[auto] w-[50px]`}
        }
        .right-navbar--button{
            ${tw`flex gap-x-[15px]`}
            .btn-demo{
                ${tw`lg:block hidden`}
            }
        }
    `
])

export {
    NavbarWrapper
}