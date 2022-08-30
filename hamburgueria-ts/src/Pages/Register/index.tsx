import { CatchyComponent } from "../../Components/Catchy"
import { FormComponent } from "../../Components/Form"
import * as yup from 'yup'
import { FormsPage } from "../../Styles/Forms"

export const RegisterPage = () => {
    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('Email obrigatório').email('Email invalido'),
        password: yup.string().required('Senha obrigatória')
        .matches(/^(?=.*[A-Z])/, 'A sua senha deve ter ao menos uma letra maiuscula')
        .matches(/^(?=.*[a-z])/, 'A sua senha deve ter ao menos uma letra minuscula')
        .matches(/^(?=.*[!#@$%&])/, 'A sua senha deve ter ao menos um caractere especial')
        .matches(/^(?=.*[0-9])/, 'A sua senha deve ter ao menos uma letra maiuscula')
        .min(8),
        repeatPassword: yup.string().required('Repetir a senha obrigatória').oneOf([yup.ref('password'), null], 'A senhas devem ser iguais')
    })

    return <FormsPage>
        <CatchyComponent/>
        <FormComponent formSchema={formSchema}/>
    </FormsPage>
}