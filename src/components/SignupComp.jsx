import React from 'react'
import Input from './Input'
import Tiger from '../assets/images/tiger.png'
import { useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import authService from "../music_backend/auth"

const SignupComp = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleNavigate = () => {
    navigate("/login")
  }

  const createUser = async (data) => {
    try {
      const formData = new FormData();
      formData.append("username", data.username)
      formData.append("email", data.email)
      formData.append("fullName", data.fullName)
      formData.append("password", data.password)
      formData.append("avatar", data.avatar[0])

      const userData = await authService.registerUser(formData)
      if (!userData || userData instanceof Error) {
        throw new Error(userData);
      }

      navigate('/login')

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
          alt="Signup Image"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Right side with signup form */}
      <div className="md:w-1/2 w-full bg-transparent flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-white">Sign Up</h2>
          <form className='shadow shadow-slate-700 p-5' onSubmit={handleSubmit(createUser)}>
            <div>
              <Input
                label="Full Name"
                {...register('fullName', {
                  required: 'fullName is required'
                })}
                placeholder='Enter your name'
                className='w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500'
                labelClass='block text-gray-400 text-sm font-bold mb-1'
              />
            </div>
            {errors.fullName && <p className="text-red-500 mb-1 -mt-3">{errors.fullName.message}</p>}
            <div className="mt-2">
              <Input
                label="Username"
                {...register('username', {
                  required: 'username is required'
                })}
                placeholder="Username"
                className="w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-1"
              />
            </div>
            {errors.username && <p className="text-red-500 mb-1 -mt-3">{errors.username.message}</p>}
            <div className="mt-2">
              <Input
                label="Email"
                {...register('email', {
                  required: 'email is required',
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email must be a valid address"
                  }
                })}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-1"
              />
            </div>
            {errors.email && <p className="text-red-500 mb-1 -mt-3">{errors.email.message}</p>}
            <div className='mt-2'>
              <Input
                label='Avatar'
                type='file'
                {...register('avatar', {
                  required: 'avatar is required'
                })}
                className='rounded'
                labelClass='block text-gray-400 text-sm font-bold mb-1'
              />
            </div>
            {errors.avatar && <p className="text-red-500 mb-1 -mt-3">{errors.avatar.message}</p>}
            <div className="mt-2 mb-6">
              <Input
                label="Password"
                type="password"
                {...register('password', {
                  required: 'password is required'
                })}
                placeholder="Password"
                className="w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-1"
              />
            </div>
            {errors.password && <p className="text-red-500 mb-1 -mt-3">{errors.password.message}</p>}
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className='block text-gray-400 text-sm font-bold mt-2 text-center'>Already have an account ? <span className='text-blue-300 cursor-pointer' onClick={handleNavigate}>Login</span> </p>
        </div>
      </div>
    </div>
  )
}

export default SignupComp