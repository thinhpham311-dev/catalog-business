import tw, { styled, css } from 'twin.macro'

const BranchWrapper = styled.div(() => [
    tw`relative h-[90vh] w-full bg-primary-3`,
    css`
        .branchs-inner{
            ${tw`absolute top-[15%] right-[20%] text-white font-type-1`}
            h1{
                ${tw`text-[7vw] font-thin`}
            }
            p{
                ${tw`text-[1.3vw] font-thin`}
            }
        }
        .branchs-list{
            ${tw`bottom-[5%] absolute left-1/2 -translate-x-1/2 w-full overflow-x-hidden`}
           
            .branchs-sliders{
                ${tw`flex py-[100px] items-center gap-[50px] w-[calc(300px*8)] animate-scroll`}
                .branchs-slide{
                    ${tw`w-[300px] h-[100px] flex items-center justify-center`}
                    img{
                        ${tw`w-[90%] h-[auto]`}
                    }
                }
            }
        }    
    `
])

export {
    BranchWrapper
}