import React, { InputHTMLAttributes, forwardRef } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    icon?: string
    error?: string;
    children?: React.ReactNode
}
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ placeholder, type = 'text', icon, error, children, ...otherProps }, ref) => {
    return (
        <div className='mb-4'>
            <label className="input input-bordered flex items-center gap-2 input-md ">
                <input type={type} className="grow" placeholder={placeholder} {...otherProps} ref={ref} />
                {icon && <img src={icon} alt="icon" width={20} />}
            </label>
            {error && (
                <div className="text-red-500 text-xs mt-1">{error}</div>
            )}
            {children}
        </div>
    )
})

export default TextInput
