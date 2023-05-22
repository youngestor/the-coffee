import axiosClient from './axiosClient'

export const apiNewsRead = () =>
    axiosClient.get('/api/news/read')

export const apiNewsTrash = () =>
    axiosClient.get('/api/news/trash')

export const apiNewsCreate = data =>
    axiosClient.post('/api/news/create', data)

export const apiNewsUpdate = data =>
    axiosClient.put(`/api/news/update/${data._id}`, data)

export const apiNewsRestore = id =>
    axiosClient.patch(`/api/news/restore/${id}`)

export const apiNewsDelete = id =>
    axiosClient.delete(`/api/news/delete/${id}`)

export const apiNewsDeleteForce = id =>
    axiosClient.delete(`/api/news/delete/force/${id}`)