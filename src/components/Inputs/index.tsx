import clsx from "clsx";
import React, {HtmlHTMLAttributes} from "react";
import { Input } from '@headlessui/react';

type InputType = 'button' | 'email' | 'number' | 'text' | 'password';
type InputBorder = 'xl' | '2xl' | '3xl';
type InputColor = 'red' | 'blue' | 'green' | 'teal'
type InputTextColor = 'white' | 'black' | 'grey'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: InputType;
    border?: InputBorder;
    color?: InputColor;
    textColor?: InputTextColor;
}

const InputStyle: React.FC<InputProps> = (
  type = 'number',
  border = 'xl',
  color = 'red', 
  
)



