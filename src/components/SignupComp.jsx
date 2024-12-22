import React from 'react'
import Input from './Input'
import conf from '../conf/conf'
import Tiger from '../assets/images/tiger.png'

const SignupComp = () => {

  console.log(conf.clientId)
  console.log(conf.clientSecret)
  console.log(conf.redirectUri)

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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <Input 
                label="Username"
                placeholder="Username"
                className="w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-2"
              />
            </div>
            <div className="mb-4">
              <Input 
                label="Email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-2"
              />
            </div>
            <div className="mb-4">
              <Input 
                label="Password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-2"
              />
            </div>
            <div className="mb-6">
              <Input 
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-gray-400 text-sm font-bold mb-2"
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupComp