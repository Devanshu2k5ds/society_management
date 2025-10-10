import React from 'react'

const SmallCard = (props) => {
  // accepts props.width like "500px" or "100%" or number (treated as px)
  const widthValue =
    props.width === undefined
      ? '500px'
      : typeof props.width === 'number'
      ? `${props.width}px`
      : props.width
const colorMap = {
    'blue-600': { bg: 'bg-blue-600/10', text: 'text-blue-600',border:'border-blue-600' },
    'green-600': { bg: 'bg-green-600/10', text: 'text-green-600' ,border:'border-green-600'},
    'purple-600': { bg: 'bg-purple-600/10', text: 'text-purple-600', border:'border-purple-600'},
    // add more mappings you need...
  }
   const cls = colorMap[props.color] ?? { bg: 'bg-gray-100', text: 'text-gray-700',border:'border-gray-600'}
  return (
    <div
      className={`${cls.bg} p-5 flex flex-col text-start  items-start rounded-2xl ${cls.border} border-1`}
      style={{ width: widthValue }}
    >
      <div className='flex'>
        <img className='w-[70px] h-[70px]' src={props.src} alt='eco-driving-indicator' />
        <div className='ml-5 mt-3'>
          <h1 className='font-bold'>{props.title}</h1>
          <p className='text-gray-600 text-[14px]'>{props.date}</p>
        </div>
      </div>
      <p>{props.content}</p>
      <button className={`mt-4 ${cls.text} font-medium text-[15px]`}>learn more-{'>'}</button>
    </div>
  )
}

export default SmallCard
