import React from 'react'

export default function InputComponent({label,placeholder,type,className,id,onChange,value}) {
  return (
    <>
    <label>{label}</label>
    <input 
    placeholder={placeholder}
    type={type}
    className={className}
    id={id}
    onChange={onChange}
    value={value}
    style={style}
    />
    </>
  )
}
