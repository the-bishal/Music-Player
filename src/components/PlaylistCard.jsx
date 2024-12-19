import React from 'react'
import sampleImg from '../assets/images/sample.jpg'

const PlaylistCard = () => {
  return (
    <div className='w-full my-2 flex gap-2 hover:bg-[#1F1F1F] cursor-pointer p-1 items-center'>
      <img 
        src={sampleImg}
        alt=""
        className='w-12 h-12 rounded-[6px]' 
      />
      <div className='ml-2 flex flex-col justify-center'>
        <h3 className='text-white'>Liked Songs</h3>
        <p className='text-gray-400 text-xs'>
            Playlist • 51 songs
        </p>
      </div>
    </div>
  )
}

export default PlaylistCard
