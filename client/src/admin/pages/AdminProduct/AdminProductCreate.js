import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'
import { connect } from 'react-redux'

import { path } from '../../../utils'
import { apiProductCreate } from '../../../services'

function AdminProductCreate({ userInfo }) {
    const { register, handleSubmit } = useForm()
    const [image, setImage] = useState('')
    const [errMessage, setErrMessage] = useState()
    const [success, setSuccess] = useState()

    const onSubmit = async (data, e) => {
        if (!image) {
            return setErrMessage('Vui lòng thêm ảnh mô tả.')
        } else {
            data.author = userInfo.fullname
            data.image = image
        }
        try {
            const res = await apiProductCreate(data)
            if (res.product) {
                setSuccess('Thêm sản phẩm mới thành công.')
                setErrMessage('')
                setImage('')
                e.target.reset()
            }
        } catch (e) {
            setErrMessage(e.errMessage)
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='action'>
                <Link to={`${path.ADMIN}/${path.ADMIN_PRODUCT_READ}`} className='btn-action'>
                    Danh sách sản phẩm
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='admin-form-wrapper'>
                <div className='title'>
                    Thêm sản phẩm mới
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input required autoComplete="off" {...register('name', { required: true })} placeholder='Tên sản phẩm' />
                    </div>
                    <div className='item'>
                        <input required autoComplete="off" {...register('desc', { required: true })} placeholder='Mô tả sản phảm' />
                    </div>
                    <div className='item'>
                        <input required autoComplete="off" {...register('price', { required: true })} placeholder='Giá sản phẩm' />
                    </div>
                    <div className='item'>
                        <input required type='number' autoComplete="off" {...register('quantity', { required: true })} placeholder='Số lượng' />
                    </div>
                    <div className='item'>
                        <label className='file-upload'>
                            <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => {
                                    setImage(base64)
                                }}
                            />
                            Ảnh
                        </label>
                    </div>
                    {image && <img className='review-img' src={image} alt='' />}
                </div>
                {errMessage && <div className='error-mess'>{errMessage}</div>}
                {success && <div className='success-mess'>{success}</div>}
                <button type='submit'>
                    Thêm
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo
})

export default connect(mapStateToProps)(AdminProductCreate)