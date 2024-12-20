import React, {useId} from 'react'

const Input = ({
    placeholder = '',
    type = 'text',
    className = '',
    bgColor = 'bg-primary',
    textColor = 'text-secondary',
    label,
    labelClass = '',
    ...props
}) => {

    const id = useId()

    return (
        <div className='flex flex-col gap-2 w-full'>
            {label && <label
                htmlFor = {id}
                className={`${labelClass}`}
            >{label}</label>}
            <input 
                id={id}
                type={type} 
                placeholder={placeholder}  
                className={`border-none outline-none ${bgColor} ${textColor} ${className}`}
                {...props}
            />
        </div>
    )
}

export default Input
