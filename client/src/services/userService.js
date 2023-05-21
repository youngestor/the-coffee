import axiosClient from './axiosClient'

export const apiUserRead = () =>
    axiosClient.get('/api/user/read')

export const apiUserCreate = data =>
    axiosClient.post('/api/user/create', data)

export const apiUserLogin = data =>
    axiosClient.post('/api/user/login', data)

export const apiUserUpdate = data =>
    axiosClient.put('/api/user/update', data)

export const apiUserDelete = id =>
    axiosClient.post('/api/user/delete', { _id: id })