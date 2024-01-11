import { Metadata } from "next";

import AboutMeSection from './components/AboutMeSection';
import CopyrightsSection from './components/CopyrightsSection';
import Separador from './components/Separador';
import ProjectsSection from './components/ProjectsSection';
import SocialSection from './components/SocialSection';
import CenterComponent from './components/CenterComponent';
import MyProfileSection from  './components/MyProfileSection';
import  HeaderTopSection from  './components/HeaderTopSection';

export default function About() {

  return (
    //Color Negro guia para saber donde estoy trabajando cambiar a blanco al finalizar el proyecto
    <div style={{ 
      backgroundColor: "#000000"
    }}>
  
   <CenterComponent >
    <MyProfileSection /> 

      <Separador />

      <AboutMeSection /> 

    
      <ProjectsSection />

      <SocialSection />  

      </CenterComponent>
 
    <CopyrightsSection />
    </div>
    
  );
}