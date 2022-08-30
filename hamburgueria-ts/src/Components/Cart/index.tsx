import { UseCart } from "../../contexts/Cart"
import { ButtonComponent } from "../Button"
import { CardCartComponent } from "../CardCart"
import { Cart } from "./style"


export const CartComponent = () => {
    const { setModalCart, cart, total, removeAll } = UseCart()

    return <Cart id="cart">
        <header>
            <h2>Carrinho de Compras</h2>
            <button onClick={()=>setModalCart(false)}>X</button>
        </header>
        <main>
            {cart.length>0? 
            <>
                {cart.map(({img, quantity, title, id, price, type})=><CardCartComponent key={id} img={img} quantity={quantity} title={title} id={id} price={price} type={type}/>)}
                <hr />
                <div>
                    <h2>Total: </h2>
                    <h3>{total}</h3>
                </div>
                <ButtonComponent onClick={removeAll} color="gray">Remover todos</ButtonComponent>
            </>
            :
            <>
                <h2>Sua sacola esta vazia</h2>
                <h5>Adicione itens</h5>
            </>}
        </main>
    </Cart>
}