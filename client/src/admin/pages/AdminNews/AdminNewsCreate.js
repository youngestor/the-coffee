import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../../utils'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'
import { apiNewsCreate } from '../../../services'

function AdminNewsCreate({ userInfo }) {
    const { register, handleSubmit } = useForm()
    const [image, setImage] = useState('')
    const [errMessage, setErrMessage] = useState()
    const [success, setSuccess] = useState()

    const onSubmit = async (data, e) => {
        if (!image) {
            return setErrMessage('Vui lòng thêm ảnh mô tả.')
        } else {
            data.author = (userInfo && userInfo.fullname) || 'Anonymous'
            data.image = image
        }
        try {
            const res = await apiNewsCreate(data)
            if (res.data.news) {
                setSuccess('Đăng tin tức mới thành công.')
                setErrMessage('')
                setImage('')
                e.target.reset()
            }
        } catch (error) {
            setErrMessage(error.response.data.errMessage)
        }
    }

    return (
        <div className='admin-read-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_NEWS_READ}`} className='btn-create'>
                    Danh sách tin tức
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='admin-create-wrapper'>
                <div className='title'>
                    Đăng tin tức mới
                </div>
                <div className='inputs'>
                    <div className='item'>
                        <input {...register('title', { required: true })} placeholder='Tiêu đề' />
                    </div>
                    <div className='item'>
                        <input {...register('desc', { required: true })} placeholder='Nội dung' />
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
                    Đăng
                </button>
            </form>
        </div >
    )
}

export default AdminNewsCreate;