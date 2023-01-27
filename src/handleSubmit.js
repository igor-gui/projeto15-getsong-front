import { authenticate } from "./services/api.js";

export default function handleSubmit(e, form, rout) {
    e.preventDefault()
    const body = {};
    form.forEach((inp) => body[inp.name] = (inp.value))
    authenticate(body, rout)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err.message))
    console.log(body)
}