import React, {useId} from 'react'

const Input = ({
    placeholder = '',
    type = 'text',
    className = '',
    bgColor = 'bg-white',
    textColor = 'text-secondary',
    label,
    labelClass = '',
    ...props
},ref) => {

    const id = useId()

    return (
        <div className='flex flex-col w-full'>
            {label && <label
                htmlFor = {id}
                className={`${labelClass}`}
            >{label}</label>}
            <input 
                id={id}
                ref={ref}
                type={type} 
                placeholder={placeholder}  
                className={`border-none outline-none ${bgColor} ${textColor} ${className}`}
                {...props}
                
            />
        </div>
    )
}

export default React.forwardRef(Input)
