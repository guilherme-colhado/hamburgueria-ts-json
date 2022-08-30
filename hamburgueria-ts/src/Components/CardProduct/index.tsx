import { CardProduct } from "./style"
import { BsFillCartPlusFill } from "react-icons/bs";
import { UseCart } from "../../contexts/Cart";

interface CardProductComponentProps {
    title: string
    img: string
    type: string
    price: string
}

export const CardProductComponent = (props: CardProductComponentProps) => {
    const { title, img, price, type } = props
    
    const { addToCart } = UseCart()

    return <CardProduct>
        <figure>
            <img src={img} alt={title} />
        </figure>
        <div>
            <h3>{title}</h3>
            <p>{type}</p>
            <h4>{price}</h4>
            <button onClick={()=>addToCart(props)}>Adicionar <BsFillCartPlusFill/></button>
        </div>
    </CardProduct>
}