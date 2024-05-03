import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '@/data/data';

const orders = () => {
  return (
    <div className='dark:bg-dark bg-gray-100 min-h-screen'>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white dark:bg-dark dark:text-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 dark:bg-dark hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 dark:text-white font-bold'>
                      ${order.total.toLocaleString()}
                    </p>
                    <p className='text-gray-800 dark:text-white text-sm'>{order.name.first}</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                      order.status == 'Processing'
                        ? 'bg-green-200 dark:text-white p-2 rounded-lg'
                        : order.status == 'Completed'
                        ? 'bg-blue-200 dark:text-white p-2 rounded-lg'
                        : 'bg-pink-200 dark:text-white p-2 rounded-lg'
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className='hidden md:flex'>{order.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;