import { CatchyComponent } from "../../Components/Catchy"
import { FormComponent } from "../../Components/Form"
import * as yup from 'yup'
import { FormsPage } from "../../Styles/Forms"

export const LoginPage = () => {
    const formSchema = yup.object().shape({
        email: yup.string().required('Email obrigatório').email('Email invalido'),
        password: yup.string().required('Senha obrigatória')
    })

    return <FormsPage>
        <CatchyComponent/>
        <FormComponent formSchema={formSchema} itLogin={true}/>
    </FormsPage>
}