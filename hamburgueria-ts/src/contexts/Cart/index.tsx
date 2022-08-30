import { createContext, useContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useUser } from "../User";

interface CartProviderProps {
    children: ReactNode
}

interface CartProducts {
    id: number
    title: string
    img: string
    type: string
    price: string
    quantity: number
}

interface Product {
    title: string
    img: string
    type: string
    price: string
}

interface CartProviderData{
    cart: CartProducts[]
    addToCart: (product: Product) => void
    removeToCart: (cartProduct: CartProducts) => void
    removeAll: () => void
    quantity: number
    modalCart: boolean
    setModalCart: Dispatch<SetStateAction<boolean>>
    addQuantity: (cartProduct: CartProducts) => void
    decreaseQuantity: (cartProduct: CartProducts) => void
    total: string
}

const CartContext = createContext<CartProviderData>({} as CartProviderData)

export const UseCart = () => useContext(CartContext)

export const CartProvider = ({children}: CartProviderProps) => {
    const [cart, setCart] = useState<CartProducts[]>([])
    const token = localStorage.getItem('@Hamburgueria: Token')
    const [modalCart, setModalCart] = useState(false)
    const { userId } = useUser()
    useEffect(()=>{
        api.get(`/carts/${userId}`, {headers: {Authorization: `Bearer ${token}`}})
        .then((res)=> {
            setCart(res.data.cart)
        })
    }, [])

    const addToCart = (product: Product) => {
        let newCart = []
        if(cart.filter((prod)=>prod.title===product.title).length>0){
            newCart = cart.map(prod=>prod.title === product.title ? {...prod, quantity: prod.quantity+1} : prod)
        }else{
            newCart = [...cart, {...product, id: cart.length+1, quantity: 1}]
        }
        api.patch(`/carts/${userId}`, {cart: newCart}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res)=>{
            setCart(res.data.cart)
            toast.success(`${product.title} foi adicionado ao narrinho`)
        })
        .catch(()=>alert('Não foi possivel adicionar este produto ao carrinho'))
    }
    
    const addQuantity = (cartProduct: CartProducts) => {
        let newCart = cart.map((cart) => cart.title === cartProduct.title ? {...cart, quantity: cart.quantity+1} : cart)
        api.patch(`/carts/${userId}`, {cart: newCart}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res)=>setCart(res.data.cart)).catch((err)=>console.log(err))
    }

    const decreaseQuantity = (cartProduct: CartProducts) => {
        if(cartProduct.quantity===1){
            removeToCart(cartProduct)
        }else{
            let newCart = cart.map((product) => product.title === cartProduct.title ? {...product, quantity: product.quantity-1} : product)
            api.patch(`/carts/${userId}`, {cart: newCart}, {headers: {Authorization: `Bearer ${token}`}})
            .then((res)=>setCart(res.data.cart))
        }
    }

    const quantity = cart.reduce((pv, cv)=>pv+cv.quantity, 0)

    const total ='R$ ' + cart.map(prod => ({
        price: Number(prod.price.slice(3)), quantity: prod.quantity
    }))?.reduce((a, b) => a + (b.price*b.quantity) , 0) + ',00'

    const removeToCart = (cartProduct: CartProducts) => {
        let newCart = cart.filter((product) => product.title !== cartProduct.title)
        api.patch(`/carts/${userId}`, {cart: newCart}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res)=>{
            setCart(res.data.cart)
            toast.success(`${cartProduct.title} retirado com sucesso`)
        })
    }

    const removeAll = () => {
        api.patch(`/carts/${userId}`, {cart: []}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res)=>{
            toast.success('Todos produtos retirados com sucesso')
            setCart(res.data.cart)
        })
    }

    return <CartContext.Provider value={{cart, addToCart, removeToCart, removeAll, quantity, modalCart, setModalCart, addQuantity, decreaseQuantity, total}}>{children}</CartContext.Provider>
}