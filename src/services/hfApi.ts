import axios from 'axios'

const hfApi = axios.create({
    baseURL: '/api'
})

export default hfApi