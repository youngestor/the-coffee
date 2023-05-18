import axiosClient from './axios'

export const apiUserRead = () =>
    axiosClient.get('/api/user/read')

export const apiUserCreate = data =>
    axiosClient.post('/api/user/create', data)

export const apiUserLogin = data =>
    axiosClient.post('/api/user/login', data)