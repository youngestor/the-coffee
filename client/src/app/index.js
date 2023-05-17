import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Home from './pages/Home'

import Layouts from './components/Layouts'

export default function Page() {
    return (
        <Layouts>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </Layouts>
    )
}