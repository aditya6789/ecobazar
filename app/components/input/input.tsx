import { NextPage } from 'next';
import React from 'react'
interface Iinput{
    type :string;
    placeholder:string;
    className?:string;
}

const Input:NextPage<Iinput> = ({type,placeholder,className}) => {
  return (
    <input type={type} placeholder={placeholder}  className={`py-3 px-2 w-full border rounded-lg focus:border-green-500 focus:outline-none ${className}`} />
  )
}

export default Input