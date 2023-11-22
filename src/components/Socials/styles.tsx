import tw, { styled, css } from 'twin.macro'

const SocialsWrapper = styled.div(() => [
    tw`relative xl:h-[60vh] h-[40vh] w-full bg-black`,
    css`
        .socials-inner{
            ${tw`relative flex items-center justify-between py-0 xl:px-[12vw] px-[4vw] font-type-1 h-[33.3%] w-full text-white border-t-[0.5px] border-t-secondary-1 border-b-[0.5px] border-b-secondary-1`}
            svg{
                ${tw`font-thin xl:text-[2.4vw] text-[10vw]  relative z-50 `}
            }
            h1{
                ${tw`xl:text-[3vw] text-[10vw] text-white font-thin relative z-50`}
            }
            .center{
                ${tw`h-0 w-full bg-primary-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out delay-500`}
                transition: all ease .5s;
            }
            &:hover .center{
                ${tw`h-full`}
            }
        }
    `
])

const BooksWrapper = styled.div(() => [
    tw`relative py-[10vh] xl:h-[50vh] h-[60vh] w-full bg-black `,
    css`
        .container{
            ${tw`container mx-auto px-[4vw]`}
        }
        h1.title-books{
            ${tw`xl:text-[5vw] mb-[5vw] xl:mb-0  text-[12vw] font-thin text-white font-type-1 leading-[1]`}
        }
        button.btn-books{
            ${tw`py-[18px] px-[30px] border-0 bg-primary-2 rounded-full mt-[2vw] text-white`}
        }
    `
])

export {
    SocialsWrapper,
    BooksWrapper
}