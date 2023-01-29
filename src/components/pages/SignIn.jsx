import handleSubmit from "../../handleSubmit"
import formGenerator from "../formGenerator"
import AuthFormStyle from "../styles/AuthFormStyle"
import guitar from '../../assets/images/guitar.jpg'

export default function SignIn({ form }) {

    const inputList = formGenerator(form)

    const route = '/sign-in';
    

    return (
        <>
            <AuthFormStyle backImage={guitar} onSubmit={(e) => handleSubmit(e, form, route)}>
                {inputList}
                <button type="submit">Entrar</button>
            </AuthFormStyle>
        </>
    )
}
