'use client'
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname  } from 'next/navigation';

const Header = ({ title }: { title: string }) => {
  const pathname = usePathname().replace(/^\/+/, '');
  const formattedTitle = pathname === '' ? 'Dashboard' : pathname.replace(/\b\w/g, c => c.toUpperCase()); 
  return (
    <div className='flex justify-between p-4 dark:bg-dark dark:text-white'>
      <h2 style={{marginTop: '3px'}}>{formattedTitle}</h2>
      <div className="flex items-center ">
        <ThemeToggle />
        <h2 className='ml-4'>Welcome, Shweta</h2>
      </div>
    </div>
  )
}

export default Header