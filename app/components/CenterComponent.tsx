import React, { ReactNode } from 'react';

interface CenterComponentProps {
  children: ReactNode;
  isDarkMode: boolean;
}

const CenterComponent: React.FC<CenterComponentProps> = ({ children, isDarkMode }) => {
  return (
    <div 
      style={{
        backgroundColor: isDarkMode ? '#1f2937' : '#FFFFFF',
        color: isDarkMode ? '#fff' : '#000',
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "90px",
        maxWidth: "800px",
        margin: "0 auto",
        zIndex: "10",
      }}
    >
      {children}
    </div>
  );
};

export default CenterComponent;
