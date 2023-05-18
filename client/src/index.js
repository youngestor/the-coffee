import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { path } from './utils'
import App from './app'
import Admin from './admin'
import './assets/scss/index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${path.HOME}*`} element={
          <App />
        } />
        <Route path={`${path.ADMIN}/*`} element={
          <Admin />
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
