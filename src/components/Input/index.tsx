import clsx from 'clsx';
import React, { HtmlHTMLAttributes } from 'react';
import { Description, Label, Input } from '@headlessui/react';

type InputType = 'email' | 'number' | 'password';
type InputBorder = 'xl' | '2xl' | '3xl';
type InputTextColor = 'white' | 'black' | 'gray';

interface InputPops extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  border?: InputBorder;
  textColor?: InputTextColor;
}

const inputProportion: React.FC<InputPops> = ({
  children,
  type = 'number',
  border = 'xl',
  textColor = 'gray',
  className,
  disabled,
  value,
  ...props
}) => {
  const inputStyles: Record<InputType, Record<InputTextColor, string>> = {
    number: {
      gray: 'pl-3 pt-2 pb-2 pr-3 2xl text-gray-500 border border-gray-600 px-2',
      white: 'pl-3 pt-2 pb-2 pr-3 2xl text-white border border-gray-600 px-2',
      black: 'pl-3 pt-2 pb-2 pr-3 2xl text-black border border-gray-600 px-2',
    },
    email: {
      gray: 'pl-3 pt-2 pb-2 pr-3 Xl text-gray-500 border border-gray-600 px-2',
      white: 'pl-3 pt-2 pb-2 pr-3 Xl text-white border border-gray-600 px-2',
      black: 'pl-3 pt-2 pb-2 pr-3 Xl text-black border border-gray-600 px-2',
    },
    password: {
      gray: 'pl-3 pt-2 pb-2 pr-3 3xl text-gray-500 border border-gray-600 px-2',
      white: 'pl-3 pt-2 pb-2 pr-3 3xl text-white border border-gray-600 px-2',
      black: 'pl-3 pt-2 pb-2 pr-3 3xl text-black border border-gray-600 px-2',
    },
  };

  const borderStyles: Record<InputBorder, string> = {
    xl: 'text-Xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };

  return (
    <>
      <Label className="font-medium text-white">{type}</Label>
      <Description className="">Please write yours {type}</Description>
      <Input
        className={clsx(
          inputStyles,
          className,
          value,
          inputStyles[type][textColor],
          borderStyles[border]
        )}
        disabled={disabled}
        {...props}
      />
    </>
  );
};

export default inputProportion;
