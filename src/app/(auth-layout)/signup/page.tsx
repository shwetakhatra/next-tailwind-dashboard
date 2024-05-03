import Link from 'next/link'
import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline, MdPerson } from 'react-icons/md'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <main className='flex flex-col items-center w-full flex-1 px-5 md:px-20 text-center justify-center'>
        <div className='bg-white rounded-2xl shadow-2xl w-full md:w-2/3 max-w-4xl'>
          <div className='md:flex'>
            <div className='md:w-3/5 p-5'>
              <div className='text-left font-bold'>
                <img
                  className="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=800"
                  alt="Company Name"
                />
              </div>
              <div className='py-10'>
                <h2 className='text-3xl font-bold mb-2 text-purple-800'>Sign up for account</h2>
                <div className='border-2 w-10 border-purple-800 inline-block mb-2'></div>
                
                <div className='flex flex-col items-center'>
                  <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3 rounded-md'>
                    <MdPerson className='text-gray-400 m-2'/>
                    <input type="text" name="fullname" placeholder='Full Name' className='bg-gray-100 outline-none text-sm flex-1'/>
                  </div>
                  <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3 rounded-md'>
                    <FaRegEnvelope className='text-gray-400 m-2'/>
                    <input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
                  </div>
                  <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3 rounded-md'>
                    <MdLockOutline className='text-gray-400 m-2'/>
                    <input type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                  </div>
                  <Link href="#" className='border-2 border-purple-800 text-purple-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-800 hover:text-white'>Sign Up</Link>
                </div>
              </div>
            </div>
            <div className='md:w-2/5 bg-purple-800 text-white py-20 md:py-36 sm:rounded-bl-none sm:rounded-tr-2xl sm:rounded-br-2xl rounded-tr-none rounded-br-2xl rounded-bl-2xl px-12'>
              <h2 className='text-3xl font-bold mb-2'>Welcome back !</h2>
              <div className='border-2 w-10 border-white inline-block mb-2'></div>
              <p className='mb-10'>If you already have an account then sign in from here!!</p>
              <Link href="/signin" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-800'>Sign In</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUp
