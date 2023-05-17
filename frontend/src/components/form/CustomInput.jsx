import React from 'react'

const CustomInput = (props) => {
    const {name, type, value, onChange, placeholder} = props
  return (
    <input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} className="w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5"/>
  )
}

export default CustomInput