import { forwardRef, InputHTMLAttributes } from "react"
import { ErrorText, Input } from "./style"

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string
    label: string
    error?: string
    active: boolean
}

export const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(({type, label, active, error,...rest}: InputComponentProps, ref) => {
    return <>
    <div>
        <Input error={!active ? '' : !!error ? 'yes' : 'no'}>
            <input ref={ref} type={type} id={label} {...rest} placeholder=" "/>
            <label htmlFor={label}>{label}</label>
        </Input>
        <ErrorText>{!!error && error}</ErrorText>
    </div>
    </> 
})