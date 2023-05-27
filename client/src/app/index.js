import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { path } from '../utils'
import Layouts from './components/Layouts'
import ScrollToTop from './components/ScrollToTop'
import Error from './pages/Error'
import Home from './pages/Home'
import News from './pages/News'


export default function Page() {
    return (
        <Layouts>
            <ScrollToTop />
            <Routes>
                <Route index element={<Home />} />
                <Route path={path.NEWS} element={<News />} />
                <Route path={path.ALL} element={<Error />} />
            </Routes>
        </Layouts>
    )
}