import React from 'react';

interface SeparadorProps {
  isDarkMode: boolean;
}

const Separador: React.FC<SeparadorProps> = ({ isDarkMode }) => {
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#81888f' : '#7ac7c1',
        paddingTop: '0.1px',
        paddingBottom: '1px',
        paddingLeft: '5px',
        paddingRight: '5px',
        borderRadius: '8px',
        marginBottom: '60px',
        marginTop: '65px',
      }}
    ></div>
  );
};

export default Separador;
