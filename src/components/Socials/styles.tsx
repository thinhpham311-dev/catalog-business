import tw, { styled, css } from 'twin.macro'

const SocialsWrapper = styled.div(() => [
    tw`relative h-[60vh] w-full bg-black`,
    css`
        .socials-inner{
            ${tw`relative flex items-center justify-between py-0 px-[5vw] font-type-1 h-[33.3%] w-full text-white border-t-[0.5px] border-t-secondary-1 border-b-[0.5px] border-b-secondary-1`}
            svg{
                ${tw`font-thin text-[2.4vw] relative z-50 `}
            }
            h1{
                ${tw`text-[3vw] text-white font-thin relative z-50`}
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
    tw`relative h-[50vh] w-full bg-black py-[7vw] px-[5vw]`,
    css`
        h1.title-books{
            ${tw`text-[5vw] font-thin text-white font-type-1 leading-[1]`}
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