import React, { useState } from 'react';

interface AcordeonProps {
  title: string;
  content: string;
  id: string;
}

const Acordeon: React.FC<AcordeonProps> = ({ title, content, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={`#accordion-collapse-body-${id}`} aria-expanded={isOpen} aria-controls={`accordion-collapse-body-${id}`} onClick={toggleAccordion}>
          <span>{title}</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id={`accordion-collapse-body-${id}`} className={isOpen ? "" : "hidden"} aria-labelledby={`accordion-collapse-heading-${id}`}>
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Acordeon;