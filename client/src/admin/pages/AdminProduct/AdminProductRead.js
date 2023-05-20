import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiProductRead, apiProductDelete } from '../../../services'
import { path } from '../../../utils'

function AdminProductRead() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiProductRead()
        setProduct(res.data.product)
    }

    const deleteProduct = async id => {
        if (window.confirm("Xóa vĩnh viễn?")) {
            await apiProductDelete(id)
            fetchData()
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_PRODUCT_CREATE}`} className='btn-create'>
                    Thêm sản phẩm
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tác giả</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {product && product.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <img src={item.image} alt={item.title} />
                            </td>
                            <td>{item.author}</td>
                            <td>
                                <Link to={`${path.ADMIN}/${path.ADMIN_PRODUCT_UPDATE}`} state={item}>
                                    <i className="fa-solid fa-pen btn-edit"></i>
                                </Link>
                            </td>
                            <td>
                                <i onClick={() => deleteProduct(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default AdminProductRead;