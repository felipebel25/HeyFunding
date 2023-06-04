import axios from 'axios'

const hfApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_URL}/api`
})

export default hfApi