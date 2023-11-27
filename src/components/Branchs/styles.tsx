import tw, { styled, css } from 'twin.macro'

const BranchWrapper = styled.div(() => [
    tw`py-[10vh] h-[auto] w-full bg-primary-3`,
    css`
        .container{
            ${tw`container mx-auto px-[4vw]`}
        }
        .branchs-inner{
            ${tw`xl:w-[58%] w-full ml-auto text-white font-type-1`}
            h1{
                ${tw`xl:text-3xl lg:text-3xl text-lg   font-thin`}
            }
            p{
                ${tw`xl:text-3xs lg:text-3xs text-4xs font-thin`}
                br{
                    ${tw`xl:block lg:block  hidden`}
                }
            }
        }
        .branchs-list{
            ${tw` w-full overflow-x-hidden`}
           
            .branchs-sliders{
                ${tw`flex pt-[10vh] items-center gap-[50px] w-[calc(300px*8)] animate-scroll`}
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