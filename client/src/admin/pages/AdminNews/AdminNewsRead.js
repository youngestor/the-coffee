import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiNewsRead } from '../../../services'
import { path } from '../../../utils'

function AdminNewsRead() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiNewsRead()
        setNews(res.data.news)
    }

    return (
        <div className='admin-read-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_NEWS_CREATE}`} className='btn-create'>
                    Thêm tin tức
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tác giả</th>
                        <th>Tiêu đề</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {news && news.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.author}</td>
                            <td>{item.title}</td>
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

export default AdminNewsRead;