import handleSubmit from "../../handleSubmit"
import formGenerator from "../formGenerator"
import AuthStyle from "../styles/AuthStyle"
import guitar from '../../assets/images/guitar.jpg'
import { useNavigate } from "react-router-dom"

export default function SignUp({form}){
    const inputList = formGenerator(form)
    const navig = useNavigate()
    const rout = '/sign-up'


    return (
        <>
            <AuthStyle backImage={guitar} onSubmit={(e) => {handleSubmit(e, form, rout);  navig('/sign-in')}}>
               {inputList}
               <button type="submit">Cadastrar</button>
            </AuthStyle>
        </>
    )
}