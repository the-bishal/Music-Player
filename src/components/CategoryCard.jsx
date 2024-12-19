import React from 'react'
import sampleImage from '../assets/images/sample.jpg'
import { IoMdPlay } from "react-icons/io";

const CategoryCard = () => {
  return (
    <div className='relative flex-shrink-0 inline-block w-44 p-3 duration-100 hover:bg-primaryHover rounded-md cursor-pointer group'>
        <img 
            src={sampleImage} 
            alt="sampleImage" 
            className='h-40 w-40 object-cover rounded-md'
        />
        <p className='line-clamp-2 text-gray-400 text-xs mt-2 w-full whitespace-normal'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quisquam. Vel saepe unde quos a? Optio ea repellat excepturi modi.
        </p>
        <button className='absolute opacity-0 group-hover:opacity-100 right-6 top-32 duration-300 flex items-center justify-center bg-green-600 hover:bg-green-400 shadow-lg text-black h-10 w-10 rounded-full'>
          <IoMdPlay className='text-sm' />
        </button>
    </div>
  )
}

export default CategoryCard
