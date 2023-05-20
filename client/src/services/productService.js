import axiosClient from './axios'

export const apiProductRead = () =>
    axiosClient.get('/api/product/read')

export const apiProductCreate = data =>
    axiosClient.post('/api/product/create', data)

export const apiProductUpdate = data =>
    axiosClient.put('/api/product/update', data)

export const apiProductDelete = id =>
    axiosClient.post('/api/product/delete', { _id: id })
