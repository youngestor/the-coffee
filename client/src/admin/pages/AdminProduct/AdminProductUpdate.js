import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'

import { path } from '../../../utils'
import { apiProductUpdate } from '../../../services'

function AdminProductUpdate() {
    const { register, handleSubmit } = useForm()
    const [image, setImage] = useState('')
    const [errMessage, setErrMessage] = useState()

    const location = useLocation()
    const productData = location.state

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        data._id = productData._id
        data.image = image
        try {
            const res = await apiProductUpdate(data)
            if (res.product) {
                navigate(-1)
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
                    Cập nhật sản phẩm
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input required defaultValue={productData.name} autoComplete="off" {...register('name', { required: true })} placeholder='Tên sản phẩm' />
                    </div>
                    <div className='item'>
                        <input required defaultValue={productData.desc} autoComplete="off" {...register('desc', { required: true })} placeholder='Mô tả sản phảm' />
                    </div>
                    <div className='item'>
                        <input required defaultValue={productData.price} autoComplete="off" {...register('price', { required: true })} placeholder='Giá sản phẩm' />
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
                <button type='submit'>
                    Cập nhật
                </button>
            </form>
        </div>
    )
}

export default AdminProductUpdate