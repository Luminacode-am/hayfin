import clsx from "clsx";
import React, {HtmlHTMLAttributes} from "react";
import  Input  from '@headlessui/react';

type InputType ='email' | 'number' | 'password';
type InputBorder = 'xl' | '2xl' | '3xl';
type InputTextColor = 'white' | 'black' | 'gray';


interface InputPops extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: InputType;
    border?: InputBorder;
    textColor?: InputTextColor;
}

const InputStyle: React.FC<InputPops> = ({
  children,
  type = 'number',
  border = 'xl',
  textColor = 'gray', 
  className, 
  disabled,
  ...props
  
}) => {
const InputStyles: Record<InputType, Record<InputTextColor, string>> = {
number: {
  gray: 'pl-3 pt-2 pb-2 text-gray-500 border border-gray-600 px-2',
  white: 'pl-3 pt-2 pb-2 text-white border border-gray-600 px-2',
  black: 'pl-3 pt-2 pb-2 text-black border border-gray-600 px-2',
},
email: {
  gray: 'pl-3 pt-2 pb-2 text-gray-500 border border-gray-600 px-2',
  white: 'pl-3 pt-2 pb-2 text-white border border-gray-600 px-2',
  black: 'pl-3 pt-2 pb-2 text-black border border-gray-600 px-2',
},
password: {
  gray: 'pl-3 pt-2 pb-2 text-gray-500 border border-gray-600 px-2',
  white: 'pl-3 pt-2 pb-2 text-white border border-gray-600 px-2',
  black: 'pl-3 pt-2 pb-2 text-black',
},
};

const borderStyles: Record<InputBorder, string> = {
  xl: 'text-Xl',
  '2xl':'text-2xl',
  '3xl': 'text-3xl',
};

return (
  <Input 
  className={clsx(
    InputStyles,
    className,
    InputStyles[type][textColor],
    borderStyles[border],
  )}
  disabled={disabled}
  {...props}
    />
);
};


export default InputStyle;