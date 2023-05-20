import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../../utils'
import { useForm } from 'react-hook-form'
import { apiUserCreate } from '../../../services'

function AdminUserCreate() {
    const { register, handleSubmit, getValues } = useForm()
    const [errMessage, setErrMessage] = useState()
    const [success, setSuccess] = useState()

    const onSubmit = async (data, e) => {
        try {
            const res = await apiUserCreate(data)
            if (res.data.user) {
                setSuccess('Đăng ký tài khoản thành công.')
                setErrMessage('')
            }
            e.target.reset()
        } catch (error) {
            setErrMessage(error.response.data.errMessage)
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_USER_READ}`} className='btn-create'>
                    Danh sách tài khoản
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='admin-form-wrapper'>
                <div className='title'>
                    Đăng ký tài khoản
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input autoComplete="off" {...register('fullname', { required: true })} placeholder='Tên đầy đủ' />
                    </div>
                    <div className='item'>
                        <input autoComplete="off" {...register('username', { required: true })} placeholder='Tài khoản' />
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
                {success && <div className='success-mess'>{success}</div>}
                <button type='submit'>
                    Đăng ký
                </button>
            </form>
        </div >
    )
}

export default AdminUserCreate;