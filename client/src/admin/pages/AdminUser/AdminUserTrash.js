import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiUserTrash, apiUserRestore, apiUserDeleteForce } from '../../../services'
import { path } from '../../../utils'

function AdminUserRead() {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiUserTrash()
        setAllUsers(res.allUsers)
    }

    const deleteForceUser = async id => {
        if (window.confirm("Xóa vĩnh viễn?")) {
            await apiUserDeleteForce(id)
            fetchData()
        }
    }

    const restoreUser = async id => {
        if (window.confirm("Khôi phục?")) {
            await apiUserRestore(id)
            fetchData()
        }
    }

    return (
        <div className='admin-list-wrapper'>
            <div className='action'>
                <Link to={`${path.ADMIN}/${path.ADMIN_USER_READ}`} className='btn-action trash'>
                    Quay lại
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên người dùng</th>
                        <th>Tên tài khoản</th>
                        <th>Khôi phục</th>
                        <th>Xóa vĩnh viễn</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.length > 0 ? allUsers.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.fullname}</td>
                            <td>{item.username}</td>
                            <td>
                                <i onClick={() => restoreUser(item._id)} className="fa-solid fa-pen btn-edit"></i>
                            </td>
                            <td>
                                <i onClick={() => deleteForceUser(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    ) :
                        <tr>
                            <td colSpan='5'>Thùng rác trống</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminUserRead;