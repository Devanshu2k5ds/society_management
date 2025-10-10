import React from 'react'
import SmallCard from '../../vite-project/components/SmallCard'
const Middle = () => {
    const logo1 = "https://img.icons8.com/color/48/eco-driving-indicator.png";
    const logo2 = "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-hackathon-ux-and-ui-flaticons-flat-flat-icons.png"
    const logo3 = "https://img.icons8.com/office/40/music.png"
  return (
    <div className='mt-5'>
      <h1 className='text-3xl font-medium'>Upcoming Events</h1>
      <p className='mt-3'>Don't miss out on these exciting upcoming events and activities</p>
      <div className='flex space-x-5 justify-center w-full mt-6 pb-10'>
        <SmallCard src={logo2} title="Hackathon 2024" content="48-hour coding marathon with amazing prizes and networking opportunities" color="blue-600" date="March 14-17,2024" width="420px"/>
        <SmallCard src={logo1} title="Hackathon 2024" content="48-hour coding marathon with amazing prizes and networking opportunities" color="green-600" date="March 14-17,2024"width="420px"/>
        <SmallCard src={logo3} title="Hackathon 2024" content="48-hour coding marathon with amazing prizes and networking opportunities" color="purple-600" date="March 14-17,2024"width="420px"/>
      </div>
    </div>
  )
}

export default Middle
