import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'

import { path } from '../../../utils'
import { apiNewsUpdate } from '../../../services'

function AdminNewsUpdate() {
    const { register, handleSubmit } = useForm()
    const [image, setImage] = useState('')
    const [errMessage, setErrMessage] = useState()

    const location = useLocation()
    const newsData = location.state

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        data._id = newsData._id
        data.image = image
        try {
            const res = await apiNewsUpdate(data)
            if (res.data.news) {
                navigate(-1)
            }
        } catch (error) {
            setErrMessage(error.response.data.errMessage)
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_NEWS_READ}`} className='btn-create'>
                    Danh sách tin tức
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='admin-form-wrapper'>
                <div className='title'>
                    Cập nhật tin tức
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input defaultValue={newsData.title} autoComplete="off" {...register('title', { required: true })} placeholder='Tiêu đề' />
                    </div>
                    <div className='item'>
                        <input defaultValue={newsData.desc} autoComplete="off" {...register('desc', { required: true })} placeholder='Nội dung' />
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

export default AdminNewsUpdate