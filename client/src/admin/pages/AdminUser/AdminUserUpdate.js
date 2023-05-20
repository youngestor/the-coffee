import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { path } from '../../../utils'
import { useForm } from 'react-hook-form'
import { apiUserUpdate } from '../../../services'

function AdminUserUpdate() {
    const { register, handleSubmit, getValues } = useForm()
    const [errMessage, setErrMessage] = useState()

    const location = useLocation()
    const userData = location.state

    const navigate = useNavigate()

    const onSubmit = async (data, e) => {
        data._id = userData._id
        try {
            const res = await apiUserUpdate(data)
            if (res.data.user) {
                navigate(-1)
            }
        } catch (error) {
            setErrMessage(error.response.data.errMessage)
        }
    }

    return (
        <div className='admin-read-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_USER_READ}`} className='btn-create'>
                    Danh sách tài khoản
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='admin-create-wrapper'>
                <div className='title'>
                    Cập nhật tài khoản
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input defaultValue={userData.fullname} autoComplete="off" {...register('fullname', { required: true })} placeholder='Tên đầy đủ' />
                    </div>
                    <div className='item'>
                        <input defaultValue={userData.username} autoComplete="off" {...register('username', { required: true })} placeholder='Tài khoản' />
                    </div>
                    <div className='item'>
                        <input type='password' autoComplete="off" {...register('password', { required: true })} placeholder='Mật khẩu' />
                    </div>
                    <div className='item'>
                        <input type='password' autoComplete="off" {...register("cpassword", {
                            validate: (value) => {
                                const { password } = getValues()
                                password === value || setErrMessage('Mật khẩu không chính xác.')
                                return password === value
                            }
                        })} placeholder='Nhập lại mật khẩu' />
                    </div>
                </div>
                {errMessage && <div className='error-mess'>{errMessage}</div>}
                <button type='submit'>
                    Cập nhật
                </button>
            </form>
        </div >
    )
}

export default AdminUserUpdate;