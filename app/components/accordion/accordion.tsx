import React, { ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  children?: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[312px] mb-4">
      <div
        className="flex justify-between items-center  p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold mr-10">{title}</h2>
        <span className="text-gray-600">{isOpen ? '▼' : '►'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          {/* Content goes here */}
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
