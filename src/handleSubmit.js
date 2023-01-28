import { authenticate } from "./services/api.js";

export default function handleSubmit(e, form, rout) {
    e.preventDefault()
    const body = {};
    form.forEach((inp) => body[inp.name] = (inp.value))
    const error = authenticate(body, rout)
        .then((res) => {
            console.log(res.data)
            return false;
        })
        .catch((err) => { console.log(err.message); return err })
    console.log(body)
    return error
}