import React, { ReactNode } from 'react';

interface CenterComponentProps {
  children: ReactNode;
  isDarkMode: boolean;
}

const CenterComponent: React.FC<CenterComponentProps> = ({ children, isDarkMode }) => {
  return (
    <div className="flex-col min-h-[100vh] justify-center items-center pl-[20px] pr-[20px] pt-[80px] max-w-[800px] mx-auto z-12"
      style={{
        backgroundColor: isDarkMode ? '#1f2937' : '#FFFFFF',
        color: isDarkMode ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
};

export default CenterComponent;
