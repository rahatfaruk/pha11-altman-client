import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// context, css
import ThemeProvider from './context/ThemeProvider.jsx'
import './index.css'
// pages, components
import App from './App.jsx'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import Queries from './pages/Queries'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/queries' element={<Queries/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
