import axiosClient from './axios'

export const apiNewsRead = () =>
    axiosClient.get('/api/news/read')

export const apiNewsCreate = data =>
    axiosClient.post('/api/news/create', data)
