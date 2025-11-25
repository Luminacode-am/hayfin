import clsx from "clsx";
import React, {HtmlHTMLAttributes} from "react";
import { Input } from '@headlessui/react';

type InputType = 'button' | 'email' | 'number' | 'text' | 'password';
type InputBorder = 'xl' | '2xl' | '3xl';
type InputColor = 'red' | 'blue' | 'green' | 'teal';
type InputTextColor = 'white' | 'black' | 'gray';


interface InputPops extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: InputType;
    border?: InputBorder;
    colors?: InputColor;
    textColor?: InputTextColor;
}

const InputStyle: React.FC<InputPops> = ({
  children,
  type = 'number',
  border = 'xl',
  color = 'red',
  textColor = 'gray', 
  className, 
  disabled,
  ...props
  
}) => {
const InputStyles: Record<InputType, Record<InputBorder, string>> = {
number: {
  gray: 'pl-10 pt-5 pb-5 text-gray-400',
  white: 'pl-10 pt-5 pb-5 pl-10 text-white',
  black: 'pl-10 pt-5 pb-5 pl-10 text-black',
},
email: {
  gray: 'pl-10 pt-5 pb-5 text-gray-400',
  white: 'pl-10 pt-5 pb-5 text-white',
  black: 'pl-10 pt-5 pb-5 text-black',
},
password: {
  gray: 'pl-10 pt-5 pb-5 text-gray-400',
  white: 'pl-10 pt-5 pb-5 text-white',
  black: 'pl-10 pt-5 pb-5 text-black',
},
};

const borderStyles: Record<InputBorder, string> = {
  xl: 'text-Xl',
  2xl: 'text-2xl',
  3xl: 'text-3xl',
};

return (
  <Input 
  className={clsx(
    InputStyles,
    InputStyles[type][textColor],
    borderStyles[border],
  )}
  disabled={disabled}
  {...props}
  >
    {children}
  </Input>
);
};


export default InputStyle;