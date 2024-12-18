import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'gray-500',
    textColor = 'black',
    className = '',
    ...props
}) => {
  return (
    <button className={`px-4 py-2 ${bgColor} ${textColor} ${className}`} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button
