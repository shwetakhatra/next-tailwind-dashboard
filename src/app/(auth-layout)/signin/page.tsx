import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

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
                <h2 className='text-3xl font-bold mb-2 text-purple-800'>Sign in to account</h2>
                <div className='border-2 w-10 border-purple-800 inline-block mb-2'></div>
                <div className='flex justify-center my-2'>
                  <Link href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                    <FaFacebookF className='cursor-pointer text-purple-800' size={18} />
                  </Link><Link href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                    <FaLinkedinIn className='cursor-pointer text-purple-800' size={18} />
                  </Link>
                  <Link href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                    <FaGoogle className='cursor-pointer text-purple-800' size={18} />
                  </Link>
                </div>
                <p className='text-gray-400 my-3'>or use your email account</p>
                <div className='flex flex-col items-center'>
                  <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3 rounded-md'>
                    <FaRegEnvelope className='text-gray-400 m-2'/>
                    <input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
                  </div>
                  <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3 rounded-md'>
                    <MdLockOutline className='text-gray-400 m-2'/>
                    <input type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                  </div>
                  <div className='flex justify-between w-full md:w-64 mb-5'>
                    <label htmlFor="" className='flex items-center text-xs'>
                      <input type="checkbox" name="remember" className='mr-1'/>Remember me
                    </label>
                    <Link href="#" className='text-xs'>Forgot password?</Link>
                  </div>
                  <Link href="#" className='border-2 border-purple-800 text-purple-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-800 hover:text-white'>Sign In</Link>
                </div>
              </div>
            </div>
            <div className='md:w-2/5 bg-purple-800 text-white py-20 md:py-36 sm:rounded-bl-none sm:rounded-tr-2xl sm:rounded-br-2xl rounded-tr-none rounded-br-2xl rounded-bl-2xl px-12'>
              <h2 className='text-3xl font-bold mb-2'>Hello, there!</h2>
              <div className='border-2 w-10 border-white inline-block mb-2'></div>
              <p className='mb-10'>Fill up personal information and start journey with us.</p>
              <Link href="/signup" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-800'>Sign up</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
