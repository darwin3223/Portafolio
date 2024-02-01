/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';


import AboutMeSection from './components/AboutMeSection';
import CopyrightsSection from './components/CopyrightsSection';
import Separador from './components/Separador';
import ProjectWeb from './components/ProjectsSection/Web-Aplication';
import ProjectAndroid from './components/ProjectsSection/Android-Aplication';
import ProjectPortafolio from './components/ProjectsSection/Portafolio';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import CenterComponent from './components/CenterComponent';
import MyProfileSection from './components/MyProfileSection';
import HeaderTopSection from './components/HeaderTopSection';

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? '#1f2937' : '#FFFFFF' }}>
      <CenterComponent isDarkMode={isDarkMode} toggleTheme={toggleTheme} >
        <HeaderTopSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <MyProfileSection isDarkMode={isDarkMode} toggleTheme={toggleTheme}  />
        <Separador isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
        <AboutMeSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ProjectWeb isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ProjectAndroid isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ProjectPortafolio isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <SocialSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ContactSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <CopyrightsSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </CenterComponent>
    </div>
  );
}
