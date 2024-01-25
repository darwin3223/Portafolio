/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";

const HeaderTopSection: React.FC = () => {
  const [isMoon, setIsMoon] = useState(false);

  const toggleIcon = () => {
    setIsMoon((prevIsMoon) => !prevIsMoon);
  };

  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginLeft: '-890px',
        marginTop: '-100px',
        paddingRight: '1500px',
        paddingLeft: '1500px',
        paddingTop: '15px',
        paddingBottom: '15px', // Ajusta el padding según sea necesario
        zIndex: '1000',
        display: 'flex', // Utilizar flexbox
        alignItems: 'center', // Centrar verticalmente los iconos
      }}
    >
      <div style={{ cursor: 'pointer', color: "#32beb7", fontSize: "1.6rem", marginRight: '5px' }} onClick={toggleIcon}>
        {isMoon ? <FaRegMoon /> : <IoSunnySharp />}
      </div>
      <div style={{ cursor: 'pointer', color: "#32beb7", fontSize: "1.6rem", marginLeft: "10px" }}>
      <IoLanguage />
      </div>
      <div
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '30%',
          border: '6px solid #FFFFFF',
          marginLeft: "-676px",
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#FFFFFF",
          boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1)', // Agregado para aplicar un desenfoque al contorno
        }}
      >
      <div
        style={{
          width: '53px',
          height: '53px',
          borderRadius: '30%',
          border: '2px solid #32beb7',
          marginRight: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#32beb7",
          marginLeft: "-3.5px",
          marginTop: "-3.1px"
        }}
      >
        <div
          style={{
            width: '51px',
            height: '51px',
            borderRadius: '30%',
            overflow: 'hidden',
            marginLeft: "-1px",
            marginTop: "-1px"
          }}
        >
          <img
            src="/images/foto.jpg"
            alt="foto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        </div>
      </div>
      <div
          style={{
      marginLeft: "10px",
      fontSize: "1.1rem",
      fontWeight: 'bold',
      color: '#5c5c5c',
         
          }}
        >
      Darwin Alves
      </div>
    </div>
  );
};

export default HeaderTopSection;
