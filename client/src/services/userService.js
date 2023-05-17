import axiosClient from './axios'

export const apiUserRead = () =>
    axiosClient.get('/api/user/read')
