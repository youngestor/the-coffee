import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { path } from '../utils'

import AdminHome from './pages/AdminHome'

import AdminLayouts from './components/AdminLayouts'
import AdminUserRead from './pages/AdminUser/AdminUserRead'

export default function Admin() {
    return (
        <AdminLayouts>
            <Routes>
                <Route index element={<AdminHome />} />
                <Route path={path.ADMIN_USER_READ} element={<AdminUserRead />} />
                <Route path={path.ALL} element={<Navigate to={`/${path.ALL}`} />} />
            </Routes>
        </AdminLayouts>
    )
}