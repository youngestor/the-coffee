import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { path } from '../utils'
import AdminLayouts from './components/AdminLayouts'

import AdminUserRead from './pages/AdminUser/AdminUserRead'
import AdminUserCreate from './pages/AdminUser/AdminUserCreate'
import AdminUserLogin from './pages/AdminUser/AdminUserLogin'
import AdminUserUpdate from './pages/AdminUser/AdminUserUpdate'

import AdminNewsRead from './pages/AdminNews/AdminNewsRead'
import AdminNewsCreate from './pages/AdminNews/AdminNewsCreate'
import AdminNewsUpdate from './pages/AdminNews/AdminNewsUpdate'

import AdminAccessoryRead from './pages/AdminAccessory/AdminAccessoryRead'
import AdminAccessoryCreate from './pages/AdminAccessory/AdminAccessoryCreate'
import AdminAccessoryUpdate from './pages/AdminAccessory/AdminAccessoryUpdate'

function Admin({ isLoggedIn }) {
    return (
        isLoggedIn ? <AdminLayouts>
            <Routes>
                <Route index element={<Navigate to={path.ADMIN_USER_READ} />} />

                <Route path={path.ADMIN_USER_READ} element={<AdminUserRead />} />
                <Route path={path.ADMIN_USER_CREATE} element={<AdminUserCreate />} />
                <Route path={path.ADMIN_USER_UPDATE} element={<AdminUserUpdate />} />

                <Route path={path.ADMIN_NEWS_READ} element={<AdminNewsRead />} />
                <Route path={path.ADMIN_NEWS_CREATE} element={<AdminNewsCreate />} />
                <Route path={path.ADMIN_NEWS_UPDATE} element={<AdminNewsUpdate />} />

                <Route path={path.ADMIN_ACCESSORY_READ} element={<AdminAccessoryRead />} />
                <Route path={path.ADMIN_ACCESSORY_CREATE} element={<AdminAccessoryCreate />} />
                <Route path={path.ADMIN_ACCESSORY_UPDATE} element={<AdminAccessoryUpdate />} />

                <Route path={path.ALL} element={<Navigate to={`/${path.ALL}`} />} />
            </Routes>
        </AdminLayouts > : <AdminUserLogin />
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(Admin)