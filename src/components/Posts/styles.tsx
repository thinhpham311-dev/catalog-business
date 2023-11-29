import tw, { styled, css } from 'twin.macro'

const PostsWrapper = styled.section(() => [
    tw` h-[auto] w-full bg-white font-type-1  py-[10vh]`,
    css`
    .post-container{
        ${tw`container mx-auto px-[4vw]`}
        h1.post-title{
            ${tw`xl:text-3xl lg:text-2xl text-lg mb-[5vh]  text-black font-thin`}
        }
        .post-inner{
            ${tw`flex gap-x-[4%]  flex-wrap top-[20%] relative xl:mb-[2vw] mb-[5vh] h-[25vh] w-full`}
            &--left{
                ${tw` h-full xl:w-[48%] w-full  rounded-[10px] overflow-hidden`}
                img{
                    ${tw`w-full object-cover h-[30vh]`}
                }
            }
            &--right{
                ${tw`flex items-start  justify-center flex-col text-black h-full xl:w-[48%] w-full`}
                h1{
                    ${tw`xl:text-xs lg:text-xs text-3xs font-type-1`}
                }
                h4{
                    ${tw`font-thin xl:text-4xs lg:text-4xs text-5xs text-[#3736369c]`}
                }
            }
        }
    }
    `
])

export {
    PostsWrapper
}