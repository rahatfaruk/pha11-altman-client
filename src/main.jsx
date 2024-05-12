import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// context, css
import ThemeProvider from './context/ThemeProvider.jsx'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
// pages, components
import App from './App.jsx'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import Queries from './pages/Queries'
import ErrorPage from './pages/ErrorPage.jsx'
import Signup from './pages/Signup.jsx'
import AuthProvider from './context/AuthProvider.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/queries' element={<Queries/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>
)
