import React, { ReactNode } from 'react';

interface CenterComponentProps {
  children: ReactNode;
  isDarkMode: boolean;
}

const CenterComponent: React.FC<CenterComponentProps> = ({ children, isDarkMode }) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px',
        backgroundColor: isDarkMode ? '#1f2937' : '#FFFFFF',
        color: isDarkMode ? '#fff' : '#000',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
};

export default CenterComponent;
