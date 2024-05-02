import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href="/">
                    <div className='bg-purple-800 text-white p-2 rounded-lg inline-block'>
                        <a href="/" className="navbar-brand d-flex align-items-center">
                            <svg className="fill-current h-8 w-8" width="50" height="50" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                            </svg>
                        </a>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href="/">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxDashboard size={20}/>
                    </div>
                </Link>
                <Link href="/customers">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <HiOutlineBookOpen size={20}/>
                    </div>
                </Link>
                <Link href="/orders">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxPerson size={20}/>
                    </div>
                </Link>
                <Link href="/settings">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FiSettings size={20}/>
                    </div>
                </Link>
            </div>
            <div>
                <Image src='https://gravatar.com/avatar/f3dfc6ef76c40a3071d13839dfb81778?s=400&d=robohash&r=x' alt='https://gravatar.com/avatar/22a271bcbe0ab1f8713d7307b2f0c6ac?s=400&d=robohash&r=x' width={48} height={48} className='rounded-full' />
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar