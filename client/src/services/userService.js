import axiosClient from './axiosClient'

export const apiUserRead = () =>
    axiosClient.get('/api/user/read')

export const apiUserTrash = () =>
    axiosClient.get('/api/user/trash')

export const apiUserCreate = data =>
    axiosClient.post('/api/user/create', data)

export const apiUserUpdate = data =>
    axiosClient.put(`/api/user/update/${data._id}`, data)

export const apiUserRestore = id =>
    axiosClient.patch(`/api/user/restore/${id}`)

export const apiUserDelete = id =>
    axiosClient.delete(`/api/user/delete/${id}`)

export const apiUserDeleteForce = id =>
    axiosClient.delete(`/api/user/delete/force/${id}`)

export const apiUserLogin = data =>
    axiosClient.post('/api/user/login', data)