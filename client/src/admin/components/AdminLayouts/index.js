import React from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

export default function AdminLayouts({ children }) {
    return (
        <React.Fragment>
            <AdminHeader />
            <div className='admin-wrapper'>
                {children}
            </div>
            <AdminFooter />
        </React.Fragment>
    )
}
