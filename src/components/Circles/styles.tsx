import tw, { styled, css } from 'twin.macro'

const CirclesWrapper = styled.section(() => [
    tw`flex items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] xl:h-[500px] xl:w-[500px] h-[300px] w-[300px]  rounded-full border-[0.5px] border-[#ffffff3b] z-50`,
    css`
        &-inner{
            ${tw`xl:h-[60%] xl:w-[60%] h-[70%] w-[70%] flex items-center justify-center rounded-full bg-transparent border-[0.5px] border-white`}
            &--text{
                ${tw` text-5xs text-center text-white font-type-1`}
                h1{
                    ${tw`xl:text-sm lg:text-xs text-2xs opacity-[0.8] font-thin`}
                }
            }     
        }
      
    `
])

export {
    CirclesWrapper
}