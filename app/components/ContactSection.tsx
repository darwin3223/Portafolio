// components/SocialSection.js
"use client"
import React, { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";

const ContactSection = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const [isCopyHovered, setCopyHovered] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("darwinalveswork@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div style={{ marginTop: '40px', width: '100%', color: isDarkMode ? '#fff' : '#000' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
          Contacto
        </p>
        <MdOutlineMailOutline style={{ marginLeft: '6px', marginTop: '0px', fontSize: '1.9rem', color: '#32beb7' }} />
      </div>
      
      <div
        style={{
          backgroundColor: isDarkMode ? '#2b3544' : '#f0f0f0',
          borderRadius: '5px',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          width: '90%',
          marginTop: '10px',
        }}
      >
        <span style={{ marginRight: '10px', color: isDarkMode ? '#fff' : 'black' }}>darwinalveswork@gmail.com</span>
        
      </div>
      <div
        style={{
          marginLeft: '548px',
          backgroundColor: isCopyHovered ? '#74c4ba' : '#a7f3d0',
          borderRadius: '5px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          width: '6%',
          marginTop: '-37.5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          transform: isCopyHovered ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={() => setCopyHovered(true)}
        onMouseLeave={() => setCopyHovered(false)}
        onClick={copyToClipboard}
      >
        <FaRegCopy style={{ color: isDarkMode ? '#2b3544': '#2b3544' }} />
      </div>
      {copied && (
        <div style={{ marginLeft: '10px', color: 'green', fontWeight: 'bold' }}>
          Copiado
        </div>
      )}
    </div>
  );
};

export default ContactSection;
