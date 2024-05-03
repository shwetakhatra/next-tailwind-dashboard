'use client'
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  return (
    <div className='flex justify-between p-4 dark:bg-dark dark:text-white'>
      <h2>Dashboard</h2>
      <div className="flex items-center ">
        <ThemeToggle />
        <h2 className='ml-4'>Welcome, Shweta</h2>
      </div>
    </div>
  )
}

export default Header