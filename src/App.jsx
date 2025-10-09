import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Routes , Route} from 'react-router-dom'
import First from './pages/first'
const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<First/>} />
      </Routes>
    </div>
  )
}

export default App
