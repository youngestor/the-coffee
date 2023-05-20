import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { apiUserLogin } from '../../../services'
import { path } from '../../../utils'
import { connect } from 'react-redux'
import { loginSuccess } from '../../../redux/actions'

function Login({ loginSuccess }) {
    const { register, handleSubmit } = useForm()
    const [errMessage, setErrMessage] = useState()
    const navigate = useNavigate()

    const onSubmit = async data => {
        try {
            const res = await apiUserLogin(data)
            if (res && res.data.errCode === 0)
                loginSuccess(res.data.user)
            navigate(-1)
        } catch (error) {
            setErrMessage(error.response.data.errMessage)
        }
    }

    return (
        <div className='admin-login-wrapper'>
            <form onSubmit={handleSubmit(onSubmit)} className='admin-form-wrapper'>
                <div className='title'>
                    Đăng nhập
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input autoComplete="off" {...register('username', { required: true })} placeholder='Tài khoản' />
                    </div>
                    <div className='item'>
                        <input type='password' autoComplete="off" {...register('password', { required: true })} placeholder='Mật khẩu' />
                    </div>
                </div>
                {errMessage && <div className='error-mess'>{errMessage}</div>}
                <button type='submit'>
                    Đăng nhập
                </button>
                <Link to={path.HOME}>Trở về trang chủ</Link>
            </form>
        </div>
    );
}

const mapStateToProps = () => ({})

const mapActionsToProps = {
    loginSuccess
}

export default connect(mapStateToProps, mapActionsToProps)(Login)