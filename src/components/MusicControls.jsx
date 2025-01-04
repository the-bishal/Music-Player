import React, { useState } from 'react'
import sampleImage from '../assets/images/sample.jpg'
import { LuCirclePlus } from "react-icons/lu";
import { IoShuffle } from "react-icons/io5";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import { SlLoop } from "react-icons/sl";
import { BsFilePlay } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { FiSpeaker } from "react-icons/fi";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaVolumeLow } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoResize } from "react-icons/io5";
import { FaWindowMaximize } from "react-icons/fa6";




const MusicControls = () => {
    const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className='w-full h-20 bg-black flex items-center justify-between px-4 sticky bottom-0'>

      <section className='flex items-center space-x-4'>
        <img 
            src={sampleImage} 
            alt="song" 
            className='h-14 w-14 object-cover rounded-md'
        />
        <div>
            <p className='text-white text-xs hover:underline cursor-pointer'>blue</p>
            <p className='text-gray-400 text-xs hover:underline cursor-pointer'>yung kai</p>
        </div>
        <LuCirclePlus className='text-gray-400 text-md hover:text-white hover:scale-110 duration-200 cursor-pointer'/>

      </section>

      <section className='flex flex-col items-center justify-center space-y-2'>
        <div className='flex items-center justify-center space-x-4'>
            <IoShuffle className='text-secondary text-2xl font-normal' />
            <MdSkipPrevious className='text-secondary text-2xl' />
            <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 duration-200'>
                {!isPlaying ? 
                    (<IoIosPlay className='text-black text-xl font-normal' />) : 
                    (<IoPauseOutline className='text-black text-xl font-normal' />)
                }
            </div>
            <MdSkipNext className='text-secondary text-2xl' />
            <SlLoop className='text-secondary text-md font-normal' />
        </div>
        <div className='flex items-center justify-center space-x-2'>
            <p className='text-xs text-secondary'>0:00</p>
            <div className="progress-container w-96 h-1 rounded-full overflow-hidden bg-[#4D4C4C] group cursor-pointer">
                <div className='w-12 h-[0.40rem] bg-white rounded-full group-hover:bg-green-600 cursor-pointer'></div>
            </div>
            <p className='text-xs text-secondary'>3:32</p>
        </div>
      </section>

      <section className='flex items-center justify-center space-x-3'>
        <BsFilePlay className='text-secondary text-lg hover:text-white duration-100 cursor-pointer'/>
        <TbMicrophone2 className='text-secondary text-lg hover:text-white duration-100 cursor-pointer'/>
        <HiOutlineQueueList className='text-secondary text-lg hover:text-white duration-100 cursor-pointer'/>
        <FiSpeaker className='text-secondary text-lg hover:text-white duration-100 cursor-pointer'/>
      <div className='flex items-center justify-center space-x-2'>
        {/* <FaVolumeXmark />
        <FaVolumeLow /> */}
        <FaVolumeHigh className='text-secondary text-lg hover:text-white duration-100 cursor-pointer'/>
            <div className="progress-container w-20 h-1 rounded-full overflow-hidden bg-[#4D4C4C] group cursor-pointer">
                <div className='w-3/4 h-[0.40rem] bg-white rounded-full group-hover:bg-green-600 cursor-pointer'></div>
            </div>
      </div>
        <FaWindowMaximize className='text-secondary text-lg hover:text-white duration-100 cursor-pointer'/>
        <IoResize className='text-secondary text-lg hover:text-white duration-100 cursor-pointer'/>
      </section>

    </div>
  )
}

export default MusicControls
