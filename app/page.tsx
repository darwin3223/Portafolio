"use client"

// eslint-disable-next-line
import React, { useState, ReactNode } from 'react';
import AboutMeSection from './components/AboutMeSection';
import Head from 'next/head';
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
import './styles.css';


interface CenterComponentProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  children: ReactNode;
}

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
    
    <Head>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
    </Head>

    
      <CenterComponent isDarkMode={isDarkMode}>
      
        <HeaderTopSection
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          language={language}
          
        />
         
        <MyProfileSection  isDarkMode={isDarkMode}
            language={language as "EN" | "ES"} />
        <Separador  isDarkMode={isDarkMode}/>
        <AboutMeSection  isDarkMode={isDarkMode}
    
          language={language} />
        <ProjectWeb  isDarkMode={isDarkMode}
        
        
          language={language} />
        <ProjectAndroid  isDarkMode={isDarkMode}
         
       
          language={language} />
        <ProjectPortafolio  isDarkMode={isDarkMode}
          language={language}/>
        <ProjectPasswordGenerator  isDarkMode={isDarkMode}
         
          language={language} />
        <SocialSection isDarkMode={isDarkMode} />
        <ContactSection  isDarkMode={isDarkMode}
  
          language={language} />
        <CopyrightsSection  isDarkMode={isDarkMode}
          language={language} />
         
      </CenterComponent>
  
    </div>

    
  );
  
}
