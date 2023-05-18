import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiAccessoryRead } from '../../../services'
import { path } from '../../../utils'

function AdminAccessoryRead() {
    const [accessory, setAccessory] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiAccessoryRead()
        setAccessory(res.data.accessory)
    }

    return (
        <div className='admin-read-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_ACCESSORY_CREATE}`} className='btn-create'>
                    Thêm phụ kiện
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tác giả</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {accessory && accessory.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.author}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <i className="fa-solid fa-pen btn-edit"></i>
                            </td>
                            <td>
                                <i className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default AdminAccessoryRead;