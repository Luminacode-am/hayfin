import clsx from 'clsx'
import React from 'react'
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
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200'

  const colorStyles : Record<ButtonVariant, Record<ButtonColor, string>> = {
    filled: {
      primary: 'bg-[#1b7a6e] text-white hover:bg-[#166359]',
      secondary: 'bg-[#4ba99a] text-white hover:bg-[#1b7a6e]',
      danger: 'bg-[#a2d8ce] text-[#0e3f38] hover:bg-[#4ba99a]',
    },
    outlined: {
      primary: 'border border-[#1b7a6e] text-[#1b7a6e] hover:bg-[#a2d8ce]',
      secondary: 'border border-[#4ba99a] text-[#4ba99a] hover:bg-[#d2f0ea]',
      danger: 'border border-[#0e3f38] text-[#0e3f38] hover:bg-[#4ba99a]',
    },
    text: {
      primary: 'text-[#1b7a6e] hover:bg-[#a2d8ce]',
      secondary: 'text-[#4ba99a] hover:bg-[#d2f0ea]',
      danger: 'text-[#0e3f38] hover:bg-[#a2d8ce]',
    }
  }

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-sm h-10 px-3',
    md: 'text-md h-12 px-4',
    lg: 'text-lg h-14 px-6',
  }

  const disabledStyles = 'opacity-60 cursor-not-allowed'

  return (
    <Button
      className={clsx(
        baseStyles,
        colorStyles[variant][color],
        sizeStyles[size],
        isFullWidth && 'w-full',
        disabled && disabledStyles,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ButtonStyled