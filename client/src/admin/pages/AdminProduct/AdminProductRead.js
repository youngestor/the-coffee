import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiProductRead, apiProductDelete } from '../../../services'
import { path } from '../../../utils'

function AdminProductRead() {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiProductRead()
        setAllProducts(res.allProducts)
    }

    const deleteProduct = async id => {
        if (window.confirm("Đưa vào thùng rác?")) {
            await apiProductDelete(id)
            fetchData()
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='action'>
                <Link to={`${path.ADMIN}/${path.ADMIN_PRODUCT_CREATE}`} className='btn-action'>
                    Thêm sản phẩm
                </Link>
                <Link to={`${path.ADMIN}/${path.ADMIN_PRODUCT_TRASH}`} className='btn-action trash'>
                    Thùng rác
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.length > 0 ? allProducts.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <img src={item.image} alt={item.title} />
                            </td>
                            <td>
                                <Link to={`${path.ADMIN}/${path.ADMIN_PRODUCT_UPDATE}`} state={item}>
                                    <i className="fa-solid fa-pen btn-edit"></i>
                                </Link>
                            </td>
                            <td>
                                <i onClick={() => deleteProduct(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    ) :
                        <tr>
                            <td colSpan='6'>Không có dữ liệu</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminProductRead;