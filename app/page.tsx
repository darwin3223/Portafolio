import { Metadata } from "next";

import AboutMeSection from './components/AboutMeSection';
import CopyrightsSection from './components/CopyrightsSection';
import Separador from './components/Separador';
import ProjectWeb from './components/ProjectsSection/Web-Aplication';
import ProjectAndroid from './components/ProjectsSection/Android-Aplication';
import ProjectPortafolio from './components/ProjectsSection/Portafolio';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import CenterComponent from './components/CenterComponent';
import MyProfileSection from  './components/MyProfileSection';
import  HeaderTopSection from  './components/HeaderTopSection';

export default function About() {


  const theme = {
  
  };
  return (

    <div style={{ 
      backgroundColor: "#000000"
    }}>
  
  <HeaderTopSection />
   <CenterComponent >
    <MyProfileSection /> 
      <Separador />
      <AboutMeSection /> 
      <ProjectWeb />
      <ProjectAndroid />
      <ProjectPortafolio/>
      <SocialSection />  
      <ContactSection />  
      <CopyrightsSection />
      </CenterComponent>
 
    
    </div>
    
    
  );
}