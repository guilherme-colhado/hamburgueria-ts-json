import { CardCart } from "./style"
import { MdDelete } from "react-icons/md";
import { UseCart } from "../../contexts/Cart";
interface CardCartComponentProps {
    id: number
    title: string
    img: string
    type: string
    price: string
    quantity: number
}

export const CardCartComponent = (props: CardCartComponentProps) => {
    const {img, title, quantity} = props

    const {addQuantity, decreaseQuantity, removeToCart} = UseCart()

    return <CardCart>
        <div>
            <figure>
                <img src={img} alt={title}/>
            </figure>
            <div>
                <h3>{title}</h3>
                <div>
                    <button onClick={()=>decreaseQuantity(props)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={()=>addQuantity(props)}>+</button>
                </div>
            </div>
        </div>
        <button onClick={()=>removeToCart(props)}><MdDelete/></button>
    </CardCart>
}