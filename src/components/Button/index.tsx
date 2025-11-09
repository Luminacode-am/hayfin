import clsx from 'clsx';
import React from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonColor = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isFullWidth?: boolean;
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
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200';
   const colorStyles: Record<ButtonVariant, Record<ButtonColor, string>> = {
    filled: {
      primary: 'bg-[#1b7a6e] text-white hover:bg-[#166359] disabled:bg-[#166359]/50',
      secondary: 'bg-[#4ba99a] text-white hover:bg-[#1b7a6e] disabled:bg-[#4ba99a]/50',
      danger: 'bg-[#a2d8ce] text-[#0e3f38] hover:bg-[#4ba99a] disabled:bg-[#a2d8ce]/50',
    },
    outlined: {
      primary: 'border border-[#1b7a6e] text-[#1b7a6e] hover:bg-[#a2d8ce] disabled:text-[#1b7a6e]/50 disabled:border-[#1b7a6e]/50',
      secondary: 'border border-[#4ba99a] text-[#4ba99a] hover:bg-[#d2f0ea] disabled:text-[#4ba99a]/50 disabled:border-[#4ba99a]/50',
      danger: 'border border-[#0e3f38] text-[#0e3f38] hover:bg-[#4ba99a] disabled:text-[#0e3f38]/50 disabled:border-[#0e3f38]/50',
    },
    text: {
      primary: 'text-[#1b7a6e] hover:bg-[#a2d8ce] disabled:text-[#1b7a6e]/50',
      secondary: 'text-[#4ba99a] hover:bg-[#d2f0ea] disabled:text-[#4ba99a]/50',
      danger: 'text-[#0e3f38] hover:bg-[#a2d8ce] disabled:text-[#0e3f38]/50',
    },
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-10 px-3 text-sm',
    md: 'h-12 px-4 text-base',
    lg: 'h-14 px-6 text-lg',
  };

  const finalClassName = clsx(
    baseStyles,
    colorStyles[variant][color],
    sizeStyles[size],
    isFullWidth && 'w-full',
    className
  );

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default ButtonStyled;