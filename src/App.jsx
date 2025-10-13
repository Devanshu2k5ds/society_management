import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'
import First from './pages/first'
import Navbar from '../components/navbar'
import Login from './pages/Login'
import {useAppContext } from '../context/AppContext'
import ForgotPassword from './pages/Forgot-password'
const App = () => {
  const {IsLogin } = useAppContext();
  console.log(IsLogin)
  return(
    <div>
      {IsLogin&&<Navbar />}
      <Routes>
        <Route path="/" element={ IsLogin ?<First/> : <Navigate to="/login"/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
)}

export default App
