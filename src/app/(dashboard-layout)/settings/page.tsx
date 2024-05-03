'use client'
import React, { useState } from 'react';
import Tabs from '@/components/Tabs';
import { tabs } from '@/data/data'

const Page = () => {
  const [activeTab, setActiveTab] = useState('generalsettings');
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <div className='dark:bg-dark bg-gray-100 min-h-screen'>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className="w-full">
            <div className="relative right-0">
              <ul
                className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
                role="tablist"
              >
                {tabs.map(tab => (
                  <Tabs
                    key={tab.id}
                    id={tab.id}
                    label={tab.label}
                    active={activeTab === tab.id}
                    onClick={() => handleTabClick(tab.id)}
                  />
                ))}
              </ul>
              <div data-tab-content="" className="p-5">
                {tabs.map(tab => (
                  <div
                    key={tab.id}
                    className={`block ${
                      activeTab === tab.id ? '' : 'hidden'
                    }`}
                    id={tab.id}
                    role="tabpanel"
                  >
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                      {tab.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
