import tw, { styled, css } from 'twin.macro'

const PostsWrapper = styled.div(() => [
    tw` h-[auto] w-full bg-white font-type-1  py-[10vh]`,
    css`
    .post-container{
        ${tw`container mx-auto px-[4vw]`}
        h1.post-title{
            ${tw`xl:text-3xl lg:text-2xl text-lg mb-[5vh]  text-black font-thin`}
        }
        .post-inner{
            ${tw`flex gap-x-[4vw] flex-wrap top-[20%] relative xl:mb-[2vw] mb-[5vh] h-[20%] w-full`}
            &--left{
                ${tw` h-full xl:w-[40%] w-full xl:left-[5%] rounded-[10px] overflow-hidden`}
                img{
                    ${tw`w-full object-cover h-[30vh]`}
                }
            }
            &--right{
                ${tw`mt-[5vh] text-black h-full xl:w-[50%] w-full`}
                h1{
                    ${tw`xl:text-xs lg:text-xs text-3xs`}
                }
                h4{
                    ${tw`font-thin xl:text-3xs lg:text-3xs text-5xs text-[#3736369c]`}
                }
            }
        }
    }
    `
])

export {
    PostsWrapper
}