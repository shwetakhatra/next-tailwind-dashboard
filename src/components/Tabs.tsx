import React from 'react';

interface TabProps {
  id: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tabs: React.FC<TabProps> = ({ id, label, active, onClick }) => {
  return (
    <li className="z-30 flex-auto text-center">
      <a
        className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
          active && 'bg-purple-800 text-white'
        }`}
        onClick={onClick}
        role="tab"
        aria-selected={active}
        aria-controls={id}
      >
        <span className="ml-1">{label}</span>
      </a>
    </li>
  );
};

export default Tabs;
