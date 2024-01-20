import React, { ReactNode } from 'react';

interface CenterComponentProps {
  children: ReactNode;
}

const CenterComponent: React.FC<CenterComponentProps> = ({ children }) => {
  return (
    <div style={{ 
      backgroundColor: "#FFFFFF"
    }}>
      {children}
    </div> 
  );
};

export default CenterComponent;