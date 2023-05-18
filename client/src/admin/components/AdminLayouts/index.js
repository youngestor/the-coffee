import React from 'react'
import AdminHeader from './AdminHeader'

export default function AdminLayouts({ children }) {
    return (
        <React.Fragment>
            <AdminHeader />
            <div className='admin-wrapper'>
                {children}
            </div>
        </React.Fragment>
    )
}
