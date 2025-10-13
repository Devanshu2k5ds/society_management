import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center gap-6 px-[5rem] py-[1rem] w-full'>
      <NavLink to='/'>
        <h1 className='text-blue-600 font-bold text-[30px] pr-15'>Society Hub</h1>
        </NavLink>
    <div className='flex gap-6 list-none m-0 p-0'>
            <NavLink to='/Home'>Home</NavLink> 
            <NavLink>Societies</NavLink>
            <NavLink>Events</NavLink>
            <NavLink>News</NavLink>
            <NavLink>Contact</NavLink>
    </div>
    </div>
  )
}
export default Navbar
