import React, { useState, useEffect } from 'react'
import { apiUserRead } from '../../../services'

function AdminUserRead() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiUserRead()
        setUsers(res.data.user)
    }

    return (
        <div className='admin-user-read'>
            {users && users.map(item =>
                <div key={item._id} className='item'>
                    {item.fullname}
                </div>)
            }
        </div>
    )
}

export default AdminUserRead;