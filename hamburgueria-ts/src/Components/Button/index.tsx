import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    color: "green" | "gray"
}

export const ButtonComponent = ({children, color, ...rest} : ButtonComponentProps) => {
    return <Button color={color} {...rest}>{children}</Button>
}