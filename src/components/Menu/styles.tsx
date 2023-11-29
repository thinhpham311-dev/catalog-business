import tw, { styled, css, theme } from 'twin.macro'

const ImageHamburger = styled.svg(() => [
    tw`h-[15px] w-full`,
    css`
   
        line {
            fill: #fff;
            fill: none;
            stroke: #fff;
            stroke-width: 32;
            stroke-linecap: round;
            stroke-miterlimit: 10;
            stroke-linejoin: bevel;
        }
    `
])

const MenuWrapper = styled.div(() => [
    tw`fixed left-0 top-0 hidden  z-[-10] w-0 !h-[100vh] w-full`,
    css`
        .menu-overlap{
            ${tw`absolute z-10 top-0 right-0 bottom-0 opacity-0 hidden w-full h-full bg-[rgba(10,60,206,.6)] `}
        }
        .menu-content{
            ${tw`xl:w-1/3 lg:w-1/3 w-full h-full shadow-md bg-white translate-x-[100%] h-full overflow-hidden absolute z-10 top-0 right-0 bottom-0  `}
            .menu-list{
                ${tw`list-none flex justify-center flex-col  p-[15%]  w-full h-[calc(100%-100px)]`}
                li{
                    ${tw`w-full overflow-hidden my-[3vh]`}
                    .menu-link{
                        ${tw`xl:text-md lg:text-sm text-xs inline-block font-type-1 w-full text-black hover:text-primary transition-all duration-500 whitespace-nowrap translate-y-[100%]`}
                    }
                }
            }
            .menu-socials{
                ${tw` px-[15%]  flex items-center  w-full h-[100px]`}
                ul{
                    ${tw`flex gap-x-10`}
                }

            }
        }
    `
])

export {
    ImageHamburger,
    MenuWrapper
}