import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiNewsTrash, apiNewsRestore, apiNewsDeleteForce } from '../../../services'
import { path } from '../../../utils'

function AdminNewsTrash() {
    const [allNews, setAllNews] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiNewsTrash()
        setAllNews(res.allNews)
    }

    const deleteForceNews = async id => {
        if (window.confirm("Xóa vĩnh viễn?")) {
            await apiNewsDeleteForce(id)
            fetchData()
        }
    }

    const restoreNews = async id => {
        if (window.confirm("Khôi phục?")) {
            await apiNewsRestore(id)
            fetchData()
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='action'>
                <Link to={`${path.ADMIN}/${path.ADMIN_NEWS_READ}`} className='btn-action trash'>
                    Quay lại
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Tác giả</th>
                        <th>Khôi phục</th>
                        <th>Xóa vĩnh viễn</th>
                    </tr>
                </thead>
                <tbody>
                    {allNews.length > 0 ? allNews.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.title}</td>
                            <td>
                                <img src={item.image} alt={item.title} />
                            </td>
                            <td>{item.author}</td>
                            <td>
                                <i onClick={() => restoreNews(item._id)} className="fa-solid fa-pen btn-edit"></i>
                            </td>
                            <td>
                                <i onClick={() => deleteForceNews(item._id)} className="fa-solid fa-trash btn-delete"></i>
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

export default AdminNewsTrash;