import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center gap-6 px-[5rem] py-[1rem] w-full'>
      <h1 className='text-blue-600 font-bold text-[30px] pr-15'>Society Hub</h1>
           <ul className='flex gap-6 list-none m-0 p-0'>
            <li>Home</li> 
            <li>Societies</li>
            <li>Events</li>
            <li>News</li>
            <li>Contact</li></ul> 
      <div className='flex gap-4  ml-auto'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>Login</button>
        <button className='px-4 py-2 border-blue-600 border-2 rounded'>Register</button>
      </div>
    </div>
  )
}
export default Navbar
