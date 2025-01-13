import React from 'react'
import Input from '../components/Input'
import Tiger from '../assets/images/tiger.png'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import authService from '../music_backend/auth'
import { useDispatch } from 'react-redux'
import {login as authLogin} from "../store/authSlice"

const LoginComp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit, formState:{errors}} = useForm()
  

  const handleNavigate = () => {
    navigate("/signup")
  }

  const loginUser = async(data) => {
    try {
      const userData = await authService.loginUser(data);
      if (!userData || userData instanceof Error) {
        throw new Error(userData);
      }
      dispatch(authLogin(userData))
      navigate("../pages/Homepage.jsx")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side with image */}
      <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
        <img 
          src={Tiger}
          alt="Login Image" 
          className="h-full w-full object-contain"
        />
      </div>

      {/* Right side with login form */}
      <div className="md:w-1/2 w-full bg-transparent flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Login</h2>
          <form className='shadow shadow-slate-700 p-5' onSubmit={handleSubmit(loginUser)} >
            <div className="mb-6">
              <Input 
                label="Email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-2"
                {...register('Email', {
                  required: 'Email is required'
                })}
              />
            </div>
            {errors.Email && <p className="text-red-500 mb-1">{errors.Email.message}</p>}
            <div className="mt-2"></div>
            <div className="mb-6">
              <Input 
                label="Password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-2"
                {...register('password', {
                  required: 'password is required'
                })}
              />
            </div>
            {errors.password && <p className="text-red-500 -mt-5 mb-4">{errors.password.message}</p>}
            <div className="flex items-center justify-between">
              <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <p className='block text-gray-400 text-sm font-bold mt-6 text-center'>New here ? <span className='text-blue-300 cursor-pointer' onClick={handleNavigate}>Sign Up</span> </p>
        </div>
      </div>
    </div>
  )
}

export default LoginComp
