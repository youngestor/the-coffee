import axios from 'axios'
import { url } from '../utils'

const axiosClient = axios.create({
    baseURL: url.SERVER
})

axiosClient.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response.data)
)

export default axiosClient