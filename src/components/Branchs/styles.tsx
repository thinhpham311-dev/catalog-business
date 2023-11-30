import tw, { styled, css } from 'twin.macro'

const BranchWrapper = styled.section(() => [
    tw`py-[10vh] h-[auto] w-full bg-primary-3 flex flex-wrap gap-x-[4%] relative`,
    css`
        .branchs-inner{
            ${tw`xl:w-[48%] xl:px-0 px-[4vw]  w-full ml-auto text-white font-type-1`}
            h1{
                ${tw`xl:text-3xl lg:text-3xl text-lg   font-thin font-type-1`}
            }
            p{
                ${tw`xl:text-3xs lg:text-3xs text-4xs font-thin font-type-1`}
                br{
                    ${tw`xl:block lg:block  hidden`}
                }
            }
        }
        .branchs-list{
            ${tw`   py-[50px] flex items-center overflow-hidden`}
           
            .branchs-sliders{
                ${tw` pt-[10vh]  whitespace-nowrap animate-scroll flex items-center`}
                .branchs-slide{
                    ${tw`w-[300px] h-[100px] flex items-center p-10`}
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