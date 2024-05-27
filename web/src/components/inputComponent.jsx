import React from 'react'
import '../styles/inputComponent.css'
export default function InputComponent({label,placeholder,type,className,id,onChange,value,style,required,labelStyle}) {
  return (
    <>
    <label style={labelStyle}>{label}</label>
    <input 
    placeholder={placeholder}
    type={type}
    className={`input ${className}`}
    id={id}
    onChange={onChange}
    value={value}
    style={style}
    required={required}
    />
    </>
  )
}
