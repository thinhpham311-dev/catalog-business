'use client'
import tw, { styled, css, theme } from 'twin.macro'

interface ButtonProps {
    $variant?: 'primary' | 'light' | 'transparent'
    $isSmall?: boolean,
    $isLink?: boolean
}

const Button = styled.button<ButtonProps>(({ $variant, $isSmall, $isLink }) => {



    return [

        tw` h-full text-5xs rounded-full transform whitespace-nowrap duration-500 border-[0.5px]  font-type-1 font-thin`,

        $variant === 'primary' && tw`!bg-primary text-white border-primary  hover:border-primary-3 hover:!bg-primary-3`,

        $variant === 'light' && tw`!bg-white text-primary border-white  hover:border-black hover:!bg-black hover:text-white`,

        $variant === 'transparent' && tw`bg-transparent hover:bg-white hover:text-primary text-white border-white`,

        $isSmall ? tw`px-5 py-2` : tw`xl:px-8 xl:py-3 px-10 py-3 `,

        $isLink && tw`border-0 text-white p-0`
    ]
})

export default Button