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
  gray: 'pl-10 bg-gray-400',
  white: 'pl-10 bg-white'
  black: 'pl-10 bg-black'
},
}
}


export default InputStyle;