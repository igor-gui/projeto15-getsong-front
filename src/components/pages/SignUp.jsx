import handleSubmit from "../../handleSubmit"
import formGenerator from "../formGenerator"
import AuthStyle from "../styles/AuthStyle"

export default function SignUp({form}){
    const inputList = formGenerator(form)

    const rout = '/sign-up'


    return (
        <>
            <AuthStyle onSubmit={(e) => handleSubmit(e, form, rout)}>
               {inputList}
               <button type="submit">Cadastrar</button>
            </AuthStyle>
        </>
    )
}