import tw, { styled, css } from 'twin.macro'

const PostsWrapper = styled.div(() => [
    tw` h-[auto] w-full bg-white font-type-1  py-[10vh]`,
    css`
    .post-container{
        ${tw`container mx-auto px-[4vw]`}
        h1.post-title{
            ${tw`xl:text-[5vw] mb-[5vh] text-[12vw] text-black font-thin`}
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
                ${tw`mt-[5vw] text-black h-full xl:w-[50%] w-full`}
                h1{
                    ${tw`xl:text-[2vw] text-[7vw]`}
                }
                h4{
                    ${tw`font-thin text-[4vw] xl:text-[1vw]`}
                }
            }
        }
    }
    `
])

export {
    PostsWrapper
}