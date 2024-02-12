/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { IoSunnySharp, IoLanguage } from 'react-icons/io5';
import { TbLetterESmall, TbLetterSSmall, TbLetterNSmall } from "react-icons/tb";
import HeaderProfile from './headerComponent/ProfileImage';

interface HeaderTopSectionProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const HeaderTopSection: React.FC<HeaderTopSectionProps> = ({ isDarkMode, toggleTheme }) => {
  const [currentLetter, setCurrentLetter] = useState(<TbLetterSSmall />);
  const [language, setLanguage] = useState('ES'); 

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'S') {
        setCurrentLetter(<TbLetterSSmall />);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const toggleLanguage = () => {
    // Alternar entre 'ES' y 'EN'
    const newLanguage = language === 'ES' ? 'EN' : 'ES';
    setLanguage(newLanguage);

    // Cambiar la letra actual según el idioma seleccionado
    if (newLanguage === 'ES') {
      setCurrentLetter(<TbLetterSSmall />);
    } else {
      setCurrentLetter(<TbLetterNSmall />);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
        color: isDarkMode ? '#fff' : '#1f2937',
        marginLeft: '-915px',
        marginTop: '-100px',
        paddingRight: '1500px',
        paddingLeft: '1500px',
        paddingTop: '15px',
        paddingBottom: '15px',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{ cursor: 'pointer', fontSize: '1.6rem', marginRight: '10px' }}
        onClick={toggleTheme}
      >
        {isDarkMode ? <FaRegMoon /> : <IoSunnySharp />}
      </div>
      <div style={{ cursor: 'pointer', fontSize: '1.6rem', marginLeft: '10px' }} onClick={toggleLanguage}>
        <IoLanguage />
      </div>
      <div style={{ marginLeft: '-9px', fontSize: '1.4rem', display: 'flex', alignItems: 'center', marginTop: "-25px" }}>
        <TbLetterESmall />
      </div>
      <div style={{ marginLeft: '-15px', fontSize: '1.4rem', display: 'flex', alignItems: 'center', marginTop: "-25px" }}>
        {currentLetter}
      </div>
      <HeaderProfile isDarkMode={isDarkMode} toggleTheme={toggleTheme} language={language} />
    </div>
  );
};

export default HeaderTopSection;
