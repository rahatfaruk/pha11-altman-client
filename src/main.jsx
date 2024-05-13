import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// context
import ThemeProvider from './context/ThemeProvider.jsx'
import AuthProvider from './context/AuthProvider.jsx'
// css
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
// pages, components
import App from './App.jsx'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import Queries from './pages/Queries'
import ErrorPage from './pages/ErrorPage.jsx'
import Signup from './pages/Signup.jsx'
import MyQueries from './pages/MyQueries'
import AddQuery from './pages/AddQuery'
import RouteGuard from './comps/RouteGuard.jsx'
import QueryDetails from './pages/QueryDetails'
import MyRecommendations from './pages/MyRecommendations'
import RecommendationsForMe from './pages/RecommendationsForMe'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='all-queries' element={<Queries/>} />
      <Route path='my-queries' element={<RouteGuard> <MyQueries/> </RouteGuard>} />
      <Route path='add-query' element={<RouteGuard> <AddQuery/> </RouteGuard>} />
      <Route path='query-details/:id' element={<RouteGuard> <QueryDetails/> </RouteGuard>} />
      <Route path='my-recommendations' element={<RouteGuard> <MyRecommendations/> </RouteGuard>} />
      <Route path='recommendations-for-me' element={<RouteGuard> <RecommendationsForMe/> </RouteGuard>} />
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
