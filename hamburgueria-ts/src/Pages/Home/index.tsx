import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CardProductComponent } from "../../Components/CardProduct"
import { CartComponent } from "../../Components/Cart"
import { HeaderComponent } from "../../Components/Header"
import { UseCart } from "../../contexts/Cart"
import { useProducts } from "../../contexts/Products"
import { Modal } from "../../Styles/Modal"
import { MainHome } from "./style"
import { BsEmojiFrown } from 'react-icons/bs'

interface ModalEvent extends EventTarget {
    id: string
}

export const HomePage = () => {
    const { products } = useProducts()
    const { modalCart, setModalCart } = UseCart()
    const nav = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('@Hamburgueria: Token')){
            nav('/login')
        }
    })

    const closeModal = (id: string) => id === 'modal' && setModalCart(false)
    
    return <>
        <HeaderComponent/>
        <MainHome>
            {
                products.length<=0 ? <div>
                    <figure><BsEmojiFrown/></figure>
                    <h2>Não foi possivel achar os produtos, recarregue a pagina por favor</h2>
                </div>
                : <>
                    {products.map(product=><CardProductComponent 
                        key={product.id} 
                        img={product.img} 
                        price={product.price} 
                        title={product.title} 
                        type={product.type} 
                    />)}
                </>
            }
        </MainHome>
        <Modal id="modal" onClick={(e)=>{closeModal((e.target as ModalEvent).id)}} active={modalCart}><CartComponent/></Modal>
    </>
}