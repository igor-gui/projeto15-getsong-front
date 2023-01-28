import handleSubmit from "../../handleSubmit"
import formGenerator from "../formGenerator"
import AuthStyle from "../styles/AuthStyle"
import monkeyGuitar from '../../assets/images/monkey_guitar.jpg'
export default function SignIn({ form }) {

    const inputList = formGenerator(form)

    const route = '/sign-in';
    

    return (
        <>
            <AuthStyle backImage={monkeyGuitar} onSubmit={(e) => handleSubmit(e, form, route)}>
                {inputList}
                <button type="submit">Entrar</button>
            </AuthStyle>
        </>
    )
}