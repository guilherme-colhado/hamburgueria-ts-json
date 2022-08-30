import { Header, IconButton, Search } from "./style"
import { MdLogout, MdSearch, MdOutlineShoppingCart as MdCart  } from "react-icons/md";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { UseCart } from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/Products";


export const HeaderComponent = () => {
    const [active, setActive] = useState(false)
    const ref = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        if(active){
            ref.current?.focus()
        }
    }, [active])

    const { quantity, setModalCart } = UseCart()
    const { search } = useProducts()

    const nav = useNavigate()

    return <Header active={active}>
        <div>
            <h1>Burger <span>Kenzie</span></h1>
            <div>
                <Search>
                    <input onChange={(e) => search(e.target.value)} type="text" placeholder="Digitar Pesquisa"/>
                    <button><MdSearch/></button>
                </Search>
                <IconButton onClick={()=>{
                    setActive(true)
                }}><MdSearch/></IconButton>
                <IconButton onClick={()=>setModalCart(true)}>
                    <MdCart/>
                    <span>{quantity}</span>
                </IconButton>
                <IconButton onClick={()=>{
                    localStorage.clear()
                    nav('/login')
                }}><MdLogout/></IconButton>
            </div>
        </div>
        <div>
            <Search onBlur={()=>setActive(false)}>
                <input onChange={(e) => search(e.target.value)} ref={ref} type="text" placeholder="Digitar Pesquisa"/>
                <button><MdSearch/></button>
            </Search>
        </div>
    </Header>
}