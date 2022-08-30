import { AxiosRequestHeaders, AxiosRequestConfig } from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

interface UserProviderProps {
    children: ReactNode
}

interface LoginData {
    email: string
    password: string
}

interface RegisterData {
    name?: string
    email: string
    password: string
}

interface UserProviderData {
    signup: ({name, email, password}: RegisterData)=>void
    login: ({email, password}: LoginData) => void
    userToken: string 
    setUserToken: Dispatch<SetStateAction<string>>
    userId: string
}

const UserContext = createContext<UserProviderData>({} as UserProviderData)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userToken, setUserToken] = useState(localStorage.getItem('@Hamburgueria: Token')||'')
    const [userId, setUserId] = useState(localStorage.getItem('@Hamburgueria: Id')||'')
    const nav = useNavigate()

    const signup = (data: RegisterData) => {
        api.post('/register', data).then((res)=>{
            api.post('/carts', {userId: res.data.user.id, cart: []} ,{headers: {Authorization: `Bearer ${res.data.accessToken}`}})
            toast.success('Voce foi registrado com sucesso')
            nav('/login')
        }).catch(()=>toast.error('E-mail já cadastrado'))
    }
    
    const login = (data: LoginData) => {
        api.post('/login', data).then((res)=>{
            console.log(res)
            setUserToken(res.data.accessToken)
            setUserId(res.data.user.id)
            localStorage.setItem('@Hamburgueria: Token', res.data.accessToken)
            localStorage.setItem('@Hamburgueria: Id', res.data.user.id)
            toast.success('Seja bem-vindo a Burger Kenzie')
            nav('/')
        }).catch(()=>{
            toast('Email ou senha invalidos, tente novamente')
        })
    }

    return <UserContext.Provider value={{signup, userToken, login, setUserToken, userId}}>{children}</UserContext.Provider>
}