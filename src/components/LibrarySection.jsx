import React from 'react'
import PlaylistCard from './PlaylistCard'
import { LuLibraryBig } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import Button from './Button';

const LibrarySection = () => {

  return (
    <div className='w-1/4 ml-2 p-4 flex flex-col bg-cardBg rounded-xl gap-4 text-white min-h-[calc(100vh-8rem)]'>
      
        {/* Heading */}
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2 hover:text-white cursor-pointer group'>
                <LuLibraryBig className='text-3xl text-secondary duration-200 group-hover:text-white'/>
                <h2 className='text-md text-secondary font-semibold duration-200 group-hover:text-white'>Your Library</h2>
            </div>
            <div className='flex items-center justify-center rounded-full h-10 w-10 cursor-pointer hover:bg-primaryHover duration-200'>
                <FaPlus className='font-extralight'/>
            </div>
        </div>

        {/* Playlist Button */}
        <Button children='Playlists' bgColor='bg-primary' className='w-2/5 rounded-full hover:bg-primaryHover duration-200' />

        {/* Playlist Cards */}
        <div>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
        </div>
    </div>
  )
}

export default LibrarySection
