import tw, { styled, css, theme } from 'twin.macro'

const NavbarWrapper = styled.nav(() => [
    tw`flex items-center justify-between py-0 px-[4vw] fixed top-0 left-0 h-[12vh] w-full z-40`,
    css`
        img{
            ${tw` xl:h-[80px] xl:w-[80px] lg:w-[70px] lg:w-[70px] w-[60px] h-[60px] object-cover rounded-full  p-3`}
        }
        .right-navbar--button{
            ${tw`flex gap-x-[15px]`}
            .btn-demo{
                ${tw`lg:block hidden`}
            }
            .btn-toggle{
                ${tw`w-[70px] py-3 px-1`}
            }
        }
    `
])

export {
    NavbarWrapper
}