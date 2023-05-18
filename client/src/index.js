import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { path } from './utils'
import redux, { persistor } from './redux'
import App from './app'
import Admin from './admin'
import './assets/scss/index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={redux}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path={`${path.HOME}*`} element={
              <App />
            } />
            <Route path={`${path.ADMIN}/*`} element={
              <Admin />
            } />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
