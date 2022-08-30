import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import hamburguer from '../../assets/menu/hamburguer.svg'
import bigkenzie from '../../assets/menu/bigkenzie.svg'
import cocacola from '../../assets/menu/cocacola.svg'
import combokenzie from '../../assets/menu/combokenzie.svg'
import fantaguarana from '../../assets/menu/fantaguarana.svg'
import ovomaltine from '../../assets/menu/ovomaltine.svg'
import sundae from '../../assets/menu/sundae.svg'
import xburgue from '../../assets/menu/xburgue.svg'

interface ProductsProviderProps {
    children: ReactNode
}

interface Products {
    id: number
    title: string
    img: string
    type: string
    price: string
}

interface ProductsProviderData {
    products: Products[]
    setProducts: Dispatch<SetStateAction<Products[]>>
    search: (searchText: string) => void
}

const ProductContext = createContext<ProductsProviderData>({} as ProductsProviderData)

export const useProducts = () => useContext(ProductContext)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const arrayInicial = [
        {
            id: 1,
            title: 'Hamburguer',
            img: hamburguer,
            type: 'Sanduíches',
            price: 'R$ 14.00'
        },
        {
            id: 2,
            title: 'X-Burgue',
            img: xburgue,
            type: 'Sanduíches',
            price: 'R$ 16.00'
        },
        {
            id: 3,
            title: 'Big Kenzie',
            img: bigkenzie,
            type: 'Sanduíches',
            price: 'R$ 18.00'
        },
        {
            id: 4,
            title: 'Combo Kenzie',
            img: combokenzie,
            type: 'Combo Kenzie',
            price: 'R$ 26.00'
        },
        {
            id: 5,
            title: 'Fanta Guaraná',
            img: fantaguarana,
            type: 'Bebidas',
            price: 'R$ 5.00'
        },
        {
            id: 6,
            title: 'Coca Cola',
            img: cocacola,
            type: 'Bebidas',
            price: 'R$ 7.00'
        },
        {
            id: 7,
            title: 'McShake Ovomaltine',
            img: ovomaltine,
            type: 'Sobremesas',
            price: 'R$ 10.00'
        },
        {
            id: 8,
            title: 'Top Sundae Chocolate',
            img: sundae,
            type: 'Sobremesas',
            price: 'R$ 10.00'
        }
    ]
    const [products, setProducts] = useState<Products[]>(arrayInicial)

    const search = (searchText:string) => {
        const filterArray = arrayInicial.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
        setProducts(filterArray)
    }

    return <ProductContext.Provider value={{products, setProducts, search}}>{children}</ProductContext.Provider>
}