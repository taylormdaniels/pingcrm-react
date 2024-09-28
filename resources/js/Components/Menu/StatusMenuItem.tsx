import { Link } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useState } from 'react';

interface StatusMenuItemProps {
  icon?: React.ReactNode;
  link: string;
  text: string;
  color: string;
}

export default function StatusMenuItem({ link, text, color }: StatusMenuItemProps) {
  const isActive = route().current(link + '*');

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuButton = () => {
    setIsOpen(!isOpen);
  }
  const iconClasses = classNames({
    'text-white': isActive,
    'text-indigo-400 group-hover:text-white': !isActive
  });

  const textClasses = classNames({
    'text-white': isActive,
    'text-indigo-200 group-hover:text-white': !isActive
  });

  return (
    <div className={`mb-3 border-solid ${color} border-white `} data-accordion="collapse">
      <h2 id="status-accordion-header">
        <button type="button"
          className='flex items-center w-full p-5 text-white border border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white' data-accordion-target="#status-accordion-body" 
          aria-controls="status-accordion-body"
          onClick={toggleMenuButton}
          aria-expanded={isOpen}
          >
          <span className={textClasses}>{text}</span>
        </button>
      </h2>
      <div id="status-accordion-body" className={isOpen ? '' : 'hidden'} aria-labelledby="status-accordion-header">
        <div className="p-5 border-b-0 border-gray-200">
          <p className="mb-2 text-black">Status Content Will Go Here</p>
        </div>
      </div>
    </div>
  );
}
