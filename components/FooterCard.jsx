import React from 'react'

const FooterCard = (props) => {
    const MapColor = {
        blue : {bg:'bg-blue-600'},
        green: {bg:'bg-green-600'},
        purple: {bg:'bg-purple-600'}
    }
    const cls = MapColor[props.color] ?? {bg:'bg-gray-600'}
  return (
    <div className='flex flex-col items-center w-[4in] space-y-2 '>
        <img className='w-fit' src={props.logo} alt="image" />
        <h1 className='font-bold '>{props.title}</h1>
        <p className='text-gray-500'>{props.content}</p>
        <button className={`font-bold ${cls.bg} mt-3 px-6 py-2 rounded`}>{props.button_title}</button>
    </div>
  )
}

export default FooterCard
