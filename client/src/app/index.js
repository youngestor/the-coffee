import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { path } from '../utils'
import Layouts from './components/Layouts'
import ScrollToTop from './components/ScrollToTop'
import Error from './pages/Error'
import Home from './pages/Home'
import News from './pages/News'
import Products from './pages/Products'
import ProductDetail from './pages/Products/ProductDetail'
import Cart from './pages/Cart'


export default function Page() {
    return (
        <Layouts>
            <ScrollToTop />
            <Routes>
                <Route index element={<Home />} />
                <Route path={path.PRODUCTS} element={<Products />} />
                <Route path={`${path.PRODUCTS}/:slug`} element={<ProductDetail />} />
                <Route path={path.CART} element={<Cart />} />
                <Route path={path.NEWS} element={<News />} />
                <Route path={path.ALL} element={<Error />} />
            </Routes>
        </Layouts>
    )
}