import React from 'react'

const CustomLabel = ({ htmlFor, children}) => {
  return (
    <label  className="text-xs text-secondary-main font-medium leading-5 mb-[5px]">{children}</label>
  )
}

export default CustomLabel