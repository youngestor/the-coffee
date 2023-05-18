import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { path } from '../utils'
import AdminLayouts from './components/AdminLayouts'

import AdminUserRead from './pages/AdminUser/AdminUserRead'
import AdminUserCreate from './pages/AdminUser/AdminUserCreate'
import Login from './pages/AdminUser/AdminUserLogin'

import AdminNewsRead from './pages/AdminNews/AdminNewsRead'
import AdminNewsCreate from './pages/AdminNews/AdminNewsCreate'

import AdminAccessoryRead from './pages/AdminAccessory/AdminAccessoryRead'
import AdminAccessoryCreate from './pages/AdminAccessory/AdminAccessoryCreate'

function Admin({ isLoggedIn }) {
    return (
        isLoggedIn ? <AdminLayouts>
            <Routes>
                <Route index element={<Navigate to={path.ADMIN_USER_READ} />} />

                <Route path={path.ADMIN_USER_READ} element={<AdminUserRead />} />
                <Route path={path.ADMIN_USER_CREATE} element={<AdminUserCreate />} />

                <Route path={path.ADMIN_NEWS_READ} element={<AdminNewsRead />} />
                <Route path={path.ADMIN_NEWS_CREATE} element={<AdminNewsCreate />} />

                <Route path={path.ADMIN_ACCESSORY_READ} element={<AdminAccessoryRead />} />
                <Route path={path.ADMIN_ACCESSORY_CREATE} element={<AdminAccessoryCreate />} />

                <Route path={path.ALL} element={<Navigate to={`/${path.ALL}`} />} />
            </Routes>
        </AdminLayouts > : <Login />
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(Admin)