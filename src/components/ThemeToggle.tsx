'use client'
import {useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() =>{
        const theme = localStorage.getItem("theme")
        if(theme === 'dark') setDarkMode(true)
    }, [])
    useEffect(() =>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
    return (
        <div className='relative w-16 h-8 flex items-center ark:bg-gray-900 bg-purple-800 cursor-pointer rounded-full p-1' onClick={() => setDarkMode(!darkMode)}>
            <FaMoon className='text-white' size={15} style={{marginLeft: '4px'}}/>
            <div className='absolute bg-white dark:bg-medium w-4 h-4 rounded-full shadow-md transform transition-transform duration-300'
            style={darkMode ? {left: '8px'} : {right: '9px'} }>
            </div>
            <BsSunFill className='text-white ml-4' size={15} />
        </div>
    )
}

export default ThemeToggle