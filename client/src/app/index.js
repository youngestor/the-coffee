import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { path } from '../utils'
import Layouts from './components/Layouts'
import Error from './pages/Error'
import Home from './pages/Home'


export default function Page() {
    return (
        <Layouts>
            <Routes>
                <Route index element={<Home />} />
                <Route path={path.ALL} element={<Error />} />
            </Routes>
        </Layouts>
    )
}