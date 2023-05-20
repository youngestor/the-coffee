import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'

import { path } from '../../../utils'
import { apiAccessoryUpdate } from '../../../services'

function AdminAccessoryUpdate() {
    const { register, handleSubmit } = useForm()
    const [image, setImage] = useState('')
    const [errMessage, setErrMessage] = useState()

    const location = useLocation()
    const accessoryData = location.state

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        data._id = accessoryData._id
        data.image = image
        try {
            const res = await apiAccessoryUpdate(data)
            if (res.data.accessory) {
                navigate(-1)
            }
        } catch (error) {
            setErrMessage(error.response.data.errMessage)
        }
    }

    return (
        <div className='admin-read-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_ACCESSORY_READ}`} className='btn-create'>
                    Danh sách phụ kiện
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='admin-create-wrapper'>
                <div className='title'>
                    Cập nhật phụ kiện
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input defaultValue={accessoryData.name} autoComplete="off" {...register('name', { required: true })} placeholder='Tên sản phẩm' />
                    </div>
                    <div className='item'>
                        <input defaultValue={accessoryData.desc} autoComplete="off" {...register('desc', { required: true })} placeholder='Mô tả sản phảm' />
                    </div>
                    <div className='item'>
                        <input defaultValue={accessoryData.price} autoComplete="off" {...register('price', { required: true })} placeholder='Giá sản phẩm' />
                    </div>
                    <div className='item'>
                        <input defaultValue={accessoryData.quantity} type='number' autoComplete="off" {...register('quantity', { required: true })} placeholder='Số lượng' />
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
        </div >
    )
}

export default AdminAccessoryUpdate