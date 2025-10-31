import React from 'react'
import {Link} from 'react-scroll'
const Mainbanner = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-600 to-purple-700 h-120 flex'>
        <div className='flex flex-col inset-0 justify-center md:items-start items-start pl-20 text-white space-y-4'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium'>Welcome to Society Hub</h1>
      <p className='text-xl w-145 text-start font-light'>Your central platform for managing college societies, events, and community engagement</p>
      <div className='display-flex space-x-5'>
        <Link 
          to="explore_society" 
          smooth={true} 
          duration={600}
          className='inline-block'
        >
          <button className='border rounded hover:cursor-pointer p-2 px-3 bg-white text-blue-600 font-medium hover:scale-110 transition-transform duration-300 ease-in-out'>
            Explore Societies
          </button>
        </Link>
        <button className='border rounded hover:cursor-pointer p-2 px-5 font-medium hover:scale-110 transition-transform duration-300 ease-in-out'>
          Join Events
        </button>
      </div>
        </div>
        <div className='inset-0 flex justify-center bg-white/10 backdrop-blur-md shadow-md h-auto my-auto p-6 ml-40 rounded-2xl  text-white'>
            <div className='flex flex-col items-start space-y-4'>
            <h2 className='text-xl font-bold'>📰 Latest Updates</h2>
                <div className='flex flex-col items-start space-y-0.7'>
            <div className='bg-yellow-300 absolute h-18 w-0.5 -translate-x-2 '></div>
            <h5>Annual Tect Fest 2025</h5>
            <p>Registration opens tomorrow for the biggest tech event of the year</p>
            <p className='text-yellow-300'>2 hours ago</p>
            </div>
            <div className='flex flex-col items-start'>
                <div className='bg-green-300 absolute h-18 w-0.5 -translate-x-2 '></div>
            <h2>New Photography Society</h2>
            <p>Photography enthusiasts can now join our newest society</p>
            <p className='text-green-300'>1 day ago</p>
            </div>
            <div className='flex flex-col items-start'>
                <div className='bg-red-300 absolute h-18 w-0.5 -translate-x-2 '></div>   
                <h2>Cultural Night Success</h2>
                <p>Over 500 students participated in last week's cultural celebration</p>
                <p className='text-red-300'>3 days ago</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Mainbanner
