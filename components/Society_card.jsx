import React from 'react'

const Society_card = (props) => {
    return (
        <div className='rounded-2xl w-full bg-white overflow-hidden shadow-md flex flex-col'>
            <div className='relative w-full h-[160px]'>
                <img className='w-full h-full object-cover' src={props.src} alt={props.alt} />
                <h3 className='absolute left-4 bottom-4 text-white font-medium text-2xl'>{props.title}</h3>
            </div>

            <div className='p-4 flex-1 flex flex-col justify-between text-gray-600'>
                <p className='text-[15px] mb-4'>{props.Content}</p>
                <div className='flex items-center justify-between'>
                    <p className='text-sm'>{props.joiny}+ Members</p>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-md'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Society_card
