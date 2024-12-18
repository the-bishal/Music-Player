import React, { useState } from 'react'
import blackicon from '../../assets/icons/blacklogo.png'
import { MdOutlineHome } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TbCategoryPlus } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import Button from '../Button';

const Header = () => {

    const [isLogin, setIsLogin] = useState(false)

  return (
    <div className='w-full bg-black text-white min-h-16 flex items-center justify-between'>
      {/* Left Icon */}
      <div className='flex items-center justify-center bg-gray-100 rounded-full h-8 w-8 ml-6 cursor-pointer'>
        <img 
            src={blackicon} 
            alt="logo"
            className='w-6 h-6' 
        />
      </div>

      {/* Mid Section */}
      <div className='flex items-center justify-center gap-2'>

        {/* Home */}
        <div className='flex items-center justify-center cursor-pointer duration-500 bg-primary group-hover:bg-primaryHover rounded-full h-12 w-12 group'>
            <MdOutlineHome className="text-secondary text-2xl hover:text-white hover:scale-110 transition-transform group"/>
        </div>

        {/* Search Box */}
        <div className='flex justify-between px-3 items-center gap-2 duration-500 bg-primary rounded-full h-12 w-96 hover:bg-primaryHover border border-gray-800 hover:border-gray-500 group '>

            <div>
                <IoIosSearch className="text-secondary text-xl duration-500 hover:text-white cursor-pointer hover:scale-110 transition-transform"/>
            </div>

            <div>
                <input 
                    type="text"
                    placeholder='What do you want to play?'
                    className='w-72 py-2 border-none outline-none duration-500 bg-primary text-white hover:bg-primaryHover group-hover:bg-primaryHover' 
                />
            </div>

            <div className='flex items-center justify-center border-l border-l-secondary'>
                <TbCategoryPlus className="text-secondary text-xl hover:text-white hover:scale-110 transition-transform ml-2"/>
            </div>

        </div>

      </div>

      {/* Last Section */}
      {isLogin ? (
        <div className='flex items-center justify-center gap-8 mr-8'>

        {/* Notification Icon */}
        <FaRegBell className="text-secondary text-xl hover:text-white hover:scale-110 transition-transform"/>

        {/* Profile Icon */}
        <div className='flex items-center justify-center bg-primary rounded-full h-12 w-12'>
            <div className='flex items-center justify-center bg-secondary rounded-full h-8 w-8'>
                <img 
                    src={blackicon} 
                    alt="logo"
                    className='w-8 h-8' 
                />
            </div>
        </div>

        </div>) : (
        <div className='flex items-center justify-center gap-2 mr-8'>

            {/* Signup */}
            <Button children="Signup" textColor='text-secondary' className='duration-200 font-semibold hover:text-white hover:scale-110'/>

            {/* Login */}
            <Button children="Login" bgColor='bg-white' textColor='text-black' className='px-6 duration-200 font-semibold hover:scale-110 rounded-full'/>
        </div>
      )}

    </div>
  )
}

export default Header
