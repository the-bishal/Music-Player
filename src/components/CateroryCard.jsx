import React from 'react'
import sampleImage from '../assets/images/sample.jpg'

const CateroryCard = () => {
  return (
    <div className='flex-shrink-0 inline-block w-44 p-3 hover:bg-primaryHover rounded-md'>
        <img 
            src={sampleImage} 
            alt="sampleImage" 
            className='h-40 w-40 object-cover rounded-md'
        />
        <p className='line-clamp-2 text-gray-400 text-xs mt-2 w-full whitespace-normal'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quisquam. Vel saepe unde quos a? Optio ea repellat excepturi modi.
        </p>
    </div>
  )
}

export default CateroryCard
