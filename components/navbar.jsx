import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
const Navbar = () => {
    const { setIsLogin } = useAppContext();
    const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center p-4 shadow-md'>
      <div>
        <h1 className='text-2xl font-bold text-blue-600'>SocietyHub</h1>
      </div>
      <div className='flex gap-8'>
        <NavLink 
          to='/home' 
          className={({ isActive }) => 
            `relative group text-gray-700 hover:text-blue-600 transition-colors
             ${isActive ? 'text-blue-600' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              Home
              <span className={`
                absolute left-0 bottom-0 h-0.5 bg-blue-600 
                transition-all duration-300
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
              `}></span>
            </>
          )}
        </NavLink>
        
        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            `relative group text-gray-700 hover:text-blue-600 transition-colors
             ${isActive ? 'text-blue-600' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              About
              <span className={`
                absolute left-0 bottom-0 h-0.5 bg-blue-600 
                transition-all duration-300
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
              `}></span>
            </>
          )}
        </NavLink>

        <NavLink 
          to='/contact' 
          className={({ isActive }) => 
            `relative group text-gray-700 hover:text-blue-600 transition-colors
             ${isActive ? 'text-blue-600' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              Contact
              <span className={`
                absolute left-0 bottom-0 h-0.5 bg-blue-600 
                transition-all duration-300
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
              `}></span>
            </>
          )}
        </NavLink>
      </div>
      <div>
        <button onClick={()=>(setIsLogin(false),navigate("/"))} className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
          Logout
        </button>
      </div>
    </div>
  )
}
export default Navbar
