import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiNewsRead, apiNewsDelete } from '../../../services'
import { path } from '../../../utils'

function AdminNewsRead() {
    const [allNews, setAllNews] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiNewsRead()
        setAllNews(res.allNews)
    }

    const deleteNews = async id => {
        if (window.confirm("Xóa vĩnh viễn?")) {
            await apiNewsDelete(id)
            fetchData()
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='action'>
                <Link to={`${path.ADMIN}/${path.ADMIN_NEWS_CREATE}`} className='btn-action'>
                    Thêm tin tức
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Tác giả</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {allNews && allNews.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.title}</td>
                            <td>
                                <img src={item.image} alt={item.title} />
                            </td>
                            <td>{item.author}</td>
                            <td>
                                <Link to={`${path.ADMIN}/${path.ADMIN_NEWS_UPDATE}`} state={item}>
                                    <i className="fa-solid fa-pen btn-edit"></i>
                                </Link>
                            </td>
                            <td>
                                <i onClick={() => deleteNews(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AdminNewsRead;