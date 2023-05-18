import axiosClient from './axios'

export const apiAccessoryRead = () =>
    axiosClient.get('/api/accessory/read')

export const apiAccessoryCreate = data =>
    axiosClient.post('/api/accessory/create', data)
