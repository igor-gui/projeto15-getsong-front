import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()

const api = axios.create({baseURL: 'http://localhost:5001'})

export function authenticate(body, rout) {
    const promise = api.post(rout, body)
    return promise;
}
