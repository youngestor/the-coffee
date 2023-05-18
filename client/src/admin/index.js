import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { path } from '../utils'
import AdminLayouts from './components/AdminLayouts'

import AdminUserRead from './pages/AdminUser/AdminUserRead'
import AdminUserCreate from './pages/AdminUser/AdminUserCreate'

import AdminNewsRead from './pages/AdminNews/AdminNewsRead'
import AdminNewsCreate from './pages/AdminNews/AdminNewsCreate'

export default function Admin() {
    return (
        <AdminLayouts>
            <Routes>
                <Route index element={<Navigate to={path.ADMIN_USER_READ} />} />

                <Route path={path.ADMIN_USER_READ} element={<AdminUserRead />} />
                <Route path={path.ADMIN_USER_CREATE} element={<AdminUserCreate />} />

                <Route path={path.ADMIN_NEWS_READ} element={<AdminNewsRead />} />
                <Route path={path.ADMIN_NEWS_CREATE} element={<AdminNewsCreate />} />

                <Route path={path.ALL} element={<Navigate to={`/${path.ALL}`} />} />
            </Routes>
        </AdminLayouts>
    )
}