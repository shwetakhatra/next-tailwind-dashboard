import React from 'react';

interface CardProps {
  amount: string;
  description: string;
  increase: string;
}

const Card: React.FC<CardProps> = ({ amount, description, increase }) => {
  return (
    <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
      <div className='flex flex-col w-full pb-4'>
        <p className='text-2xl font-bold'>{amount}</p>
        <p className='text-gray-600'>{description}</p>
      </div>
      <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
        <span className='text-green-700 text-lg'>{increase}</span>
      </p>
    </div>
  );
};

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1'>
        <Card amount='$7,874' description='Daily Revenue' increase='+18%' />
      </div>
      <div className='lg:col-span-2 col-span-1'>
        <Card amount='$7,874' description='YTD Revenue' increase='+5%' />
      </div>
      <div className='lg:col-span-2 col-span-1'>
        <Card amount='10,500' description='Customers' increase='+20%' />
      </div>
    </div>
  );
};

export default TopCards;
