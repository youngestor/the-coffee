import axiosClient from './axios'

export const apiAccessoryRead = () =>
    axiosClient.get('/api/accessory/read')

export const apiAccessoryCreate = data =>
    axiosClient.post('/api/accessory/create', data)

export const apiAccessoryUpdate = data =>
    axiosClient.put('/api/accessory/update', data)

export const apiAccessoryDelete = id =>
    axiosClient.post('/api/accessory/delete', { _id: id })
