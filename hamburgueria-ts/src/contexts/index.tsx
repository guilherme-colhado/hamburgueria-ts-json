import { ReactNode } from "react"
import { CartProvider } from "./Cart"
import { ProductsProvider } from "./Products"
import { UserProvider } from "./User"

interface ProvidersProps {
    children: ReactNode
}

export const Providers = ({children}: ProvidersProps) => {
    return <UserProvider>
        <ProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductsProvider>
    </UserProvider>
}