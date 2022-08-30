import { FiShoppingBag } from 'react-icons/fi'
import { Catchy } from './style'
import img from '../../assets/balls.svg'

export const CatchyComponent = () => {
    return <Catchy>
        <h1>
            Burger 
            <span>
                Kenzie
            </span>
        </h1>
        <div>
            <div>
                <FiShoppingBag/>
            </div>
            <p>A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b> ingredientes.</p>
        </div>
        <figure>
            <img src={img} alt='Bolinhas' />
        </figure>
    </Catchy>
}