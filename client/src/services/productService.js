import axiosClient from './axiosClient'

export const apiProductRead = () =>
    axiosClient.get('/api/product/read')

export const apiProductTrash = () =>
    axiosClient.get('/api/product/trash')

export const apiProductCreate = data =>
    axiosClient.post('/api/product/create', data)

export const apiProductUpdate = data =>
    axiosClient.put(`/api/product/update/${data._id}`, data)

export const apiProductRestore = id =>
    axiosClient.patch(`/api/product/restore/${id}`)

export const apiProductDelete = id =>
    axiosClient.delete(`/api/product/delete/${id}`)

export const apiProductDeleteForce = id =>
    axiosClient.delete(`/api/product/delete/force/${id}`)