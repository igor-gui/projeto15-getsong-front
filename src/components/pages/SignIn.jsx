import formGenerator from "../formGenerator"
import AuthFormStyle from "../styles/AuthFormStyle"
import guitar from '../../assets/images/guitar.jpg'
import { authenticate } from "../../services/api";
import { useContext } from "react";

export default function SignIn({ form }) {

    const inputList = formGenerator(form)
    const { setToken } = useContext()

    const route = '/sign-in';

    function handleSubmit(e, form, rout) {
        e.preventDefault()
        const body = {};
        form.forEach((inp) => body[inp.name] = (inp.value))
        const error = authenticate(body, rout)
            .then((res) => {
                setToken(res.data)
                console.log(res.data)
                return false;
            })
            .catch((err) => { console.log(err.message); return err })
        console.log(body)
        return error
    }


    return (
        <>
            <AuthFormStyle backImage={guitar} onSubmit={(e) => handleSubmit(e, form, route)}>
                {inputList}
                <button type="submit">Entrar</button>
            </AuthFormStyle>
        </>
    )
}
