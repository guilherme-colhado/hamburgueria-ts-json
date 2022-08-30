import { ButtonComponent } from "../Button"
import { InputComponent } from "../Input"
import { Form } from "./style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useUser } from "../../contexts/User"
import { Link, useNavigate } from "react-router-dom"

interface FormComponentProps {
    itLogin?: boolean
    formSchema: yup.AnyObjectSchema
}

interface SubmitProps {
    email: string
    name?: string
    password: string
    repeatPassword?: string
}

export const FormComponent = ( { itLogin, formSchema }: FormComponentProps ) => {
    
    const { register, handleSubmit, formState: {errors} } = useForm<SubmitProps>({resolver: yupResolver(formSchema)})

    const { signup, login } = useUser()

    const nav = useNavigate()

    const [active, setActive] = useState(false)

    const onSubmitFunction = ({email, name, password}: SubmitProps) => 
        itLogin ? login({email, password}) : signup({email, name, password})  

    return <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <section>
            {
                itLogin ? 
                <h2>Login</h2>
                :
                <>
                    <h2>Cadastrar</h2>
                    <Link to={'/login'}>Retornar para o login</Link>
                </>
            }
        </section>
        <div>
            {!itLogin && <InputComponent 
                active={active} 
                label="Nome" 
                type="text" 
                error={`${errors.name?.message || '' }`} 
                {...register('name')}
            />}
            <InputComponent 
                active={active} 
                label="Email" 
                type="email" 
                error={`${errors.email?.message || '' }`} 
                {...register('email')} 
            />
            <InputComponent 
                active={active} 
                label="Senha" 
                type="password" 
                error={`${errors.password?.message||''}`} 
                {...register('password')} 
            />
            {!itLogin && <InputComponent 
                active={active} 
                label="Repetir senha" 
                type="password" 
                error={`${errors.repeatPassword?.message || '' }`} 
                {...register('repeatPassword')} 
            />}
            <ButtonComponent type="submit" onClick={()=>setActive(true)} color={itLogin ? "green" : "gray"}>
                {itLogin ? "Logar" : 'Cadastrar'}
            </ButtonComponent>
        </div>
        {
            itLogin && <>
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <ButtonComponent type="button" onClick={()=>nav('/signup')} color="gray">Cadastrar</ButtonComponent>
            </>
        }
    </Form>
}