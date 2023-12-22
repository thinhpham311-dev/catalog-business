import tw, { styled, css } from 'twin.macro'

const SocialsWrapper = styled.section(() => [
    tw`relative h-[45vh] w-full bg-black z-0`,
    css`
        .socials-inner{
            ${tw`relative flex items-center py-0  font-type-1 h-[33.3%] w-full text-white border-t-[0.5px] border-t-secondary-1 border-b-[0.5px] border-b-secondary-1`}
           .container{
                ${tw`flex items-center justify-between`}
               svg{
                   ${tw`font-thin xl:text-md lg:text-md text-sm relative z-50 `}
                }
                h1{
                    ${tw`xl:text-sm lg:text-xs text-2xs text-white font-type-1 font-thin relative z-50`}
                }
                .center{
                    ${tw`h-0 w-full bg-primary-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out delay-500`}
                    transition: all ease .5s;
                } 
            }
            &:hover .center{
                ${tw`h-full`}
            }
        }
    `
])

const BooksWrapper = styled.section(() => [
    tw`relative py-[10vh] h-[55vh] w-full bg-black `,
    css`
        h1.title-books{
            ${tw`xl:text-3xl lg:text-2xl text-lg mb-[5vh] font-type-1  font-thin text-white font-type-1 leading-[100%]`}
        }
    `
])

export {
    SocialsWrapper,
    BooksWrapper
}