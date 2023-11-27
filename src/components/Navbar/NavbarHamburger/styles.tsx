import tw, { styled, css, theme } from 'twin.macro'

const ButtonHamburgerWrapper = styled.button(() => [
    tw`w-[50px] !px-[15px] z-50 cursor-pointer z-[9999]`,
    css`line{
        fill: #fff;
        fill: none;
        stroke: #fff;
        stroke-width: 32;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-linejoin: bevel;
    }`
])

const MenuHamburgerWrapper = styled.div(() => [
    tw`fixed left-0 top-0 hidden  z-[-10] w-0 !h-[100vh] w-full`,
    css`
        .menu-overlap{
            ${tw`absolute z-10 top-0 right-0 bottom-0 opacity-0 hidden w-full h-full bg-[rgba(10,60,206,.6)] `}
        }
        .menu-content{
            ${tw`xl:w-1/3 lg:w-1/3 w-full h-full shadow-md bg-white translate-x-[100%] h-full overflow-hidden absolute z-10 top-0 right-0 bottom-0 flex items-center `}
            .menu-list{
                ${tw`list-none  p-[15%]  w-full`}
                li{
                    ${tw`w-full overflow-hidden my-[3vh]`}
                    .menu-link{
                        ${tw`xl:text-md lg:text-sm text-xs inline-block font-type-1 w-full text-black whitespace-nowrap`}
                    }
                }
            }
        }
    `
])

export {
    ButtonHamburgerWrapper,
    MenuHamburgerWrapper
}