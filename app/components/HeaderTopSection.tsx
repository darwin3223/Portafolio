"use client"
import React, { useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const HeaderTopSection: React.FC = () => {
  const [isMoon, setIsMoon] = useState(false);

  const toggleIcon = () => {
    setIsMoon((prevIsMoon) => !prevIsMoon);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: '10px',
        paddingBottom: '35px',
        paddingLeft: '380px',
        paddingRight: '380px',
        borderRadius: '0px',
        marginBottom: '30px',
        marginTop: '0px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: '1000', // Asegúrate de que el z-index sea mayor que el de las secciones siguientes
      }}
    >
      <div style={{ cursor: 'pointer' }} onClick={toggleIcon}>
        {isMoon ? <FaRegMoon /> : <IoSunnySharp />}
      </div>
    </div>
  );
};

export default HeaderTopSection;
