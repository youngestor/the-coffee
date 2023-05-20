import axiosClient from './axios'

export const apiNewsRead = () =>
    axiosClient.get('/api/news/read')

export const apiNewsCreate = data =>
    axiosClient.post('/api/news/create', data)

export const apiNewsUpdate = data =>
    axiosClient.put('/api/news/update', data)

export const apiNewsDelete = id =>
    axiosClient.post('/api/news/delete', { _id: id })
