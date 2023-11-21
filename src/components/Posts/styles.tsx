import tw, { styled, css } from 'twin.macro'

const PostsWrapper = styled.div(() => [
    tw`relative h-[150vh] w-full bg-white font-type-1`,
    css`h1.post-title{
        ${tw`absolute top-[7%] left-[5%] text-[5vw] text-black font-thin`}
    }
    .post-inner{
        ${tw`flex top-[20%] relative mb-[2vw] h-[20%] w-full`}
        &--left{
            ${tw`relative h-full w-[40%] left-[5%] rounded-[10px] overflow-hidden`}
            img{
                ${tw`w-full h-full object-cover`}
            }
        }
        &--right{
            ${tw`mt-[5vw] text-black left-1/2 absolute h-full w-[50%]`}
            h1{
                ${tw`text-[2vw]`}
            }
            h4{
                ${tw`font-thin`}
            }
        }
    }
    `
])

export {
    PostsWrapper
}