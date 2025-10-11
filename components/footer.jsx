import React from 'react'
import FooterCard from './FooterCard'
const Footer = () => {
    const logo1 = "https://img.icons8.com/fluency/48/microsoft-people.png"
    const logo2 = "https://img.icons8.com/color/48/today.png"
    const logo3 = "https://img.icons8.com/ios-filled/50/7950F2/rating-circled.png"
    const logo4 = "https://img.icons8.com/ios-filled/15/FFFFFF/marker.png"
    const logo5 = "https://img.icons8.com/ios-filled/15/FFFFFF/phone.png"
    const logo6 ="https://img.icons8.com/ios-filled/15/FFFFFF/mail.png"
    return (

        <div className='bg-black text-white'>
            <h1 className='text-4xl pt-10'>Get Started Today</h1>
            <p className='text-gray-500 m-5'>Join our community and make the most of your college experience</p>
            <div className='flex justify-center gap-20 mt-10 mb-10  '>
                <FooterCard logo={logo1} title="Join Socities" content="Discover and join socities that match your interests and passion" button_title="Browse Socities" color="blue" />
                <FooterCard logo={logo2} title="Attend Events" content="Participate in exciting events and actiities happening in campus " button_title="View Events" color="green" />
                <FooterCard logo={logo3} title="Create Society" content="Start your own society and build a community around your interests" button_title="Get Started" color="purple" />
            </div>
            <div className='flex border-t-1 border-gray-400 bg-gray-800 w-full justify-around px-20 pt-13 pb-13'>
                <div className='flex flex-col items-start space-y-4 w-[5in] text-start'>
                    <h1 className='text-2xl font-medium '>Society Hub</h1>
                    <p>Connecting students through societies, events and shared experiences.</p>
                    <div className='flex invert space-x-2'>
                        <img className='w-[25px]' src="https://img.icons8.com/ios-glyphs/30/1A1A1A/facebook-new.png" alt="facebook" />
                        <img className='w-[25px]' src="https://img.icons8.com/material-sharp/24/1A1A1A/twitter.png" alt="twitter" />
                        <img src="https://img.icons8.com/ios/50/1A1A1A/instagram-new--v1.png" alt="insta" className='w-[25px]' />
                    </div>
                </div>
                <div className='text-start space-y-4'>
                    <h1 className='text-xl  font-medium'>Quick Links</h1>
                    <ul className='list-none space-y-1'>
                        <li>About Us</li>
                        <li>Socities</li>
                        <li>Events</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className='space-y-4 text-start'>
                    <h1 className='text-xl font-medium '>Support</h1>
                    <ul className='list-none  space-y-1'><li>Help Center</li>
                        <li >Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li></ul>
                </div>
            <div className='text-start space-y-4'><h1 className='text-xl font-medium'>Contact Info</h1>
                <ul className=' ml-5 space-y-1'>
                    <li style={{ listStyleImage: `url(${logo4})` }}>College Campus, Main Building</li>
                    <li style={{listStyleImage: `url(${logo5})`}}>(+91) 9056174744</li>
                    <li style= {{listStyleImage:`url(${logo6})`}}>info@societyhub.edu</li>
                </ul>
            </div>
        </div>
        <div className='bg-gray-800 px-25'>

        <div className=' border-t-1 border-gray-600 px-20 m-auto py-6'>
            <p className='font-medium'>© 2024 SocietyHub, All rights reserved.</p>
        </div>
        </div>
    </div >

  )
}

export default Footer
