import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { path } from '../utils'
import AdminLayouts from './components/AdminLayouts'

import AdminUserRead from './pages/AdminUser/AdminUserRead'
import AdminUserCreate from './pages/AdminUser/AdminUserCreate'
import AdminUserLogin from './pages/AdminUser/AdminUserLogin'
import AdminUserUpdate from './pages/AdminUser/AdminUserUpdate'
import AdminUserTrash from './pages/AdminUser/AdminUserTrash'

import AdminNewsRead from './pages/AdminNews/AdminNewsRead'
import AdminNewsCreate from './pages/AdminNews/AdminNewsCreate'
import AdminNewsUpdate from './pages/AdminNews/AdminNewsUpdate'
import AdminNewsTrash from './pages/AdminNews/AdminNewsTrash'

import AdminProductRead from './pages/AdminProduct/AdminProductRead'
import AdminProductCreate from './pages/AdminProduct/AdminProductCreate'
import AdminProductUpdate from './pages/AdminProduct/AdminProductUpdate'
import AdminProductTrash from './pages/AdminProduct/AdminProductTrash'

function Admin({ isLoggedIn }) {
    return (
        isLoggedIn ? <AdminLayouts>
            <Routes>
                <Route index element={<Navigate to={path.ADMIN_USER_READ} />} />

                <Route path={path.ADMIN_USER_READ} element={<AdminUserRead />} />
                <Route path={path.ADMIN_USER_CREATE} element={<AdminUserCreate />} />
                <Route path={path.ADMIN_USER_UPDATE} element={<AdminUserUpdate />} />
                <Route path={path.ADMIN_USER_TRASH} element={<AdminUserTrash />} />

                <Route path={path.ADMIN_NEWS_READ} element={<AdminNewsRead />} />
                <Route path={path.ADMIN_NEWS_CREATE} element={<AdminNewsCreate />} />
                <Route path={path.ADMIN_NEWS_UPDATE} element={<AdminNewsUpdate />} />
                <Route path={path.ADMIN_NEWS_TRASH} element={<AdminNewsTrash />} />

                <Route path={path.ADMIN_PRODUCT_READ} element={<AdminProductRead />} />
                <Route path={path.ADMIN_PRODUCT_CREATE} element={<AdminProductCreate />} />
                <Route path={path.ADMIN_PRODUCT_UPDATE} element={<AdminProductUpdate />} />
                <Route path={path.ADMIN_PRODUCT_TRASH} element={<AdminProductTrash />} />

                <Route path={path.ALL} element={<Navigate to={`/${path.ALL}`} />} />
            </Routes>
        </AdminLayouts> : <AdminUserLogin />
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(Admin)