"use client"
import React, { useState } from 'react';
import AboutMeSection from './components/AboutMeSection';
import CopyrightsSection from './components/CopyrightsSection';
import Separador from './components/Separador';
import ProjectWeb from './components/ProjectsSection/Web-Aplication';
import ProjectAndroid from './components/ProjectsSection/Android-Aplication';
import ProjectPortafolio from './components/ProjectsSection/Portafolio';
import ProjectPasswordGenerator from './components/ProjectsSection/PasswordGenerator';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import CenterComponent from './components/CenterComponent';
import MyProfileSection from './components/MyProfileSection';
import HeaderTopSection from './components/HeaderTopSection';

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('ES'); // Puedes establecer el idioma predeterminado aquí

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? '#1f2937' : '#FFFFFF' }}>
      <CenterComponent isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
        <HeaderTopSection
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language}
        />
        <MyProfileSection  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
        <Separador  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language}/>
        <AboutMeSection  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
        <ProjectWeb  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
        <ProjectAndroid  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
        <ProjectPortafolio  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language}/>
        <ProjectPasswordGenerator  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
        <SocialSection isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
        <ContactSection  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
        <CopyrightsSection  isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language} />
      </CenterComponent>
    </div>
  );
}
