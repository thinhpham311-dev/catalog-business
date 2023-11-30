import tw, { styled, css } from 'twin.macro'

const PostsWrapper = styled.section(() => [
    tw` h-[auto] w-full bg-white font-type-1  py-[10vh]`,
    css`
    .container{
        ${tw`container mx-auto px-[4vw]`}
        h1.post-title{
            ${tw`xl:text-3xl lg:text-2xl text-lg mb-[5vh]  text-black font-thin`}
        }
        .post-inner{
            ${tw`flex gap-x-[4%] items-center flex-wrap top-[20%] relative xl:mb-[5vh] mb-[2vh]  w-full`}
            &--left{
                ${tw` h-full xl:w-[48%] w-full  rounded-[10px] overflow-hidden`}
                img{
                    ${tw`w-full object-cover h-[25vh] `}
                }
            }
            &--right{
                ${tw`flex items-start flex-col text-black h-full xl:w-[48%] w-full h-full py-[20px]`}
                h1{
                    ${tw`xl:text-xs lg:text-xs text-3xs font-type-1`}
                }
                h4{
                    ${tw`font-thin xl:text-4xs lg:text-4xs text-5xs text-[#3736369c]`}
                }
            }
        }
        .btn-view-all{
            ${tw`mx-auto mt-[10vh] flex gap-x-[10px] items-center`}
        }
    }
    `
])

export {
    PostsWrapper
}