import clsx from 'clsx'
import React, { HtmlHTMLAttributes } from 'react'
import { Button } from '@headlessui/react'

type ButtonVariant = 'filled' | 'outlined' | 'text'
type ButtonColor = 'primary' | 'secondary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant
    color?: ButtonColor
    size?: ButtonSize
    isFullWidth?: boolean
}

const ButtonStyled: React.FC<ButtonProps> = ({
    children,
    variant = 'filled',
    color = 'primary',
    size = 'md',
    isFullWidth = false,
    className,
    disabled,
    ...props
}) => {

    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium'
    const colorStyles : Record<ButtonVariant, Record<ButtonColor, string>> = {
        filled: {
            primary: 'bg-blue-600 text-white hover:bg-blue-700',
            secondary: 'bg-gray-600 text-white hover:bg-gray-700',
            danger: 'bg-red-600 text-white hover:bg-red-700',
        },
        outlined: {
            primary: 'border border-blue-600 text-blue-600 hover:text-blue-700',
            secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-700',
            danger: 'border border-red-600 text-red-600 hover:bg-red-700',
        },
        text: {
            primary: 'text-blue-600 hover:bg-blue-700',
            secondary: 'text-gray-600 hover:bg-gray-700',
            danger: 'text-red-600 hover:bg-red-700',
        }
    }

        const sizeStyles: Record<ButtonSize, string> = {
            sm: 'text-sm ',
            md: 'text-md',
            lg: 'text-lg',
        }

        const disabledStyles = 'opacity-60 cursor-not-allowed'

    return (
        <Button
            className={
                clsx(baseStyles,
                     colorStyles[variant][color],
                      sizeStyles[size], 
                      {
                        'w-full': isFullWidth,
                        [disabledStyles]: disabled,
                    },
                className
                )
            }
            disabled = {disabled}
            {...props}
        >
            {children}
        </Button>
    )
}


export default ButtonStyled