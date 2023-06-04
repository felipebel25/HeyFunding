import axios from 'axios'

const hfApi = axios.create({
    baseURL: `https://hey-funding.vercel.app/api`
})

export default hfApi