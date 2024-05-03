'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaEdit, FaSave } from 'react-icons/fa';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nulla euismod, tristique mi nec, consequat mauris.');

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saving changes:', { about });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <Image 
            src='https://gravatar.com/avatar/f3dfc6ef76c40a3071d13839dfb81778?s=400&d=robohash&r=x' 
            alt='Profile Image'
            width={130} 
            height={130} 
            className='rounded-full bg-gray-100' 
          />
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">John Doe</h2>
          <p className="text-sm text-gray-600">Web Developer</p>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
            {isEditing ? (
              <button onClick={handleSave} className="flex items-center text-blue-500">
                <FaSave className="mr-1" /> Save
              </button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="flex items-center text-blue-500">
                <FaEdit className="mr-1" /> Edit
              </button>
            )}
          </div>
          {isEditing ? (
            <textarea 
              value={about} 
              onChange={(e) => setAbout(e.target.value)} 
              className="w-full h-24 p-2 border border-gray-400 focus:outline-none"
            />
          ) : (
            <p className="text-sm text-gray-600">{about}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
