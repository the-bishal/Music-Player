import React from 'react'
import sampleImage from '../assets/images/sample.jpg'
import { IoMdPlay } from "react-icons/io";

const ArtistCard = () => {
  return (
      <div className='relative flex-shrink-0 inline-block w-44 p-3 duration-100 hover:bg-primaryHover rounded-md cursor-pointer group'>
          <img 
              src={sampleImage} 
              alt="sampleImage" 
              className='h-40 w-40 mb-2 object-cover rounded-full'
          />
          <h2 className='text-white font-extralight hover:underline'>Arijit Singh</h2>
          <h3 className='text-secondary text-xs'>Artist</h3>
          <button className='absolute opacity-0 group-hover:opacity-100 right-6 top-32 duration-300 flex items-center justify-center bg-green-600 hover:bg-green-400 shadow-lg text-black h-10 w-10 rounded-full'>
            <IoMdPlay className='text-sm' />
          </button>
     </div>
    )
}

export default ArtistCard
