import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Routes , Route} from 'react-router-dom'
import First from './pages/first'
import Navbar from '../components/navbar'
const App = () => {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<First/>} />
      </Routes>
    </div>
  )
}

export default App
