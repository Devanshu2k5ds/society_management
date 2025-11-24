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
import Tech from '../components/Tech'
import ForgotPassword from './pages/Forgot-password'
import Society_form from '../components/society_form'
const App = () => {
  const {IsLogin } = useAppContext();
  // console.log(IsLogin)
  return(
    <div>
      {IsLogin&&<Navbar className="sticky top-0 left-0 right-0 z-50"/>}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home"element={<First/>}></Route>
        {/* <Route path="/Forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/tech" element={<Tech/>}></Route>
        <Route path="/create_society" element={<Society_form/>}></Route>
      </Routes>
    </div>
)}

export default App
