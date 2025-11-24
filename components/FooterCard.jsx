import React from 'react'

import { useNavigate } from 'react-router-dom';

const FooterCard = ({ logo, title, content, button_title, color, path }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(path);
    };
    const MapColor = {
        blue : {bg:'bg-blue-600'},
        green: {bg:'bg-green-600'},
        purple: {bg:'bg-purple-600'}
    }
    const cls = MapColor[color] ?? {bg:'bg-gray-600'}
  return (
    <div className='flex flex-col items-center w-[4in] space-y-2 '>
        <img className='w-fit' src={logo} alt="image" />
        <h1 className='font-bold '>{title}</h1>
        <p className='text-gray-500'>{content}</p>
        <button 
          onClick={handleClick}
          className={`font-bold ${cls.bg} mt-3 px-6 py-2 rounded hover:opacity-90 transition-opacity`}
        >
          {button_title}
        </button>
    </div>
  )
}

export default FooterCard
