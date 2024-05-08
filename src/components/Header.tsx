'use client'
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname  } from 'next/navigation';

const Header = () => {
  const pathname = usePathname().replace(/^\/+/, '');
  const formattedTitle = pathname === '' ? 'Dashboard' : pathname.replace(/\b\w/g, c => c.toUpperCase()); 
  return (
    <div className='flex justify-between p-4 dark:bg-dark dark:text-white'>
      <h2 className="mt-[3px] font-bold">{formattedTitle}</h2>
      <div className="flex items-center ">
        <ThemeToggle />
        <h2 className='ml-4 font-bold'>Welcome, John !!</h2>
      </div>
    </div>
  )
}

export default Header