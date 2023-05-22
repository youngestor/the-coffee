import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiProductTrash, apiProductRestore, apiProductDeleteForce } from '../../../services'
import { path } from '../../../utils'

function AdminProductRead() {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiProductTrash()
        setAllProducts(res.allProducts)
    }

    const deleteForceProduct = async id => {
        if (window.confirm("Xóa vĩnh viễn?")) {
            await apiProductDeleteForce(id)
            fetchData()
        }
    }

    const restoreProduct = async id => {
        if (window.confirm("Khôi phục?")) {
            await apiProductRestore(id)
            fetchData()
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='action'>
                <Link to={`${path.ADMIN}/${path.ADMIN_PRODUCT_READ}`} className='btn-action trash'>
                    Quay lại
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Khôi phục</th>
                        <th>Xóa vĩnh viễn</th>
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
                                <i onClick={() => restoreProduct(item._id)} className="fa-solid fa-pen btn-edit"></i>
                            </td>
                            <td>
                                <i onClick={() => deleteForceProduct(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    ) :
                        <tr>
                            <td colSpan='6'>Thùng rác trống</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminProductRead;