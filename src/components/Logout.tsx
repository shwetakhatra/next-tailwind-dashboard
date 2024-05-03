import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { Tooltip } from "@nextui-org/tooltip"

const Logout = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark dark:text-white text-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
        <Link href="#">
            <Tooltip 
                content="Logout" 
                placement='bottom' 
                className=" bg-gray-700 text-white rounded-sm text-xs p-1"
            >
                <FiLogOut size={20} />
            </Tooltip>
        </Link>
    </div>
  )
}

export default Logout