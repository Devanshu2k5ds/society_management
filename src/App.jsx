import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'
import First from './pages/first'
import Navbar from '../components/navbar'
import Login from './pages/login'
import {useAppContext } from '../context/AppContext'
import ForgotPassword from './pages/Forgot-password'
const App = () => {
  const {IsLogin } = useAppContext();
  console.log(IsLogin)
  return(
    <div>
      {IsLogin&&<Navbar />}
      <Routes>
        <Route path='/' element={IsLogin ? <Navigate to='/Home'/> : <Navigate to='/login'/> } />
        <Route index path="/login" element={<Login/>} />
        <Route path="/Home" element={<First/>} />
        <Route path="/Forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
)}

export default App
