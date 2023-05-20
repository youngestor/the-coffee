import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiUserRead, apiUserDelete } from '../../../services'
import { path } from '../../../utils'

function AdminUserRead() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiUserRead()
        setUsers(res.data.users)
    }

    const deleteUser = async id => {
        if (window.confirm("Xóa vĩnh viễn?")) {
            await apiUserDelete(id)
            fetchData()
        }
    }

    return (
        <div className='admin-read-wrapper'>
            <div className='create'>
                <Link to={`${path.ADMIN}/${path.ADMIN_USER_CREATE}`} className='btn-create'>
                    Thêm tài khoản
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên người dùng</th>
                        <th>Tên tài khoản</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.fullname}</td>
                            <td>{item.username}</td>
                            <td>
                                <Link to={`${path.ADMIN}/${path.ADMIN_USER_UPDATE}`} state={item}>
                                    <i className="fa-solid fa-pen btn-edit"></i>
                                </Link>
                            </td>
                            <td>
                                <i onClick={() => deleteUser(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default AdminUserRead;