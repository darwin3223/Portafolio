import { Metadata } from "next";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import AboutMeSection from './components/AboutMeSection';
import CopyrightsSection from './components/CopyrightsSection';
import Separador from './components/Separador';
import ProjectsSection from './components/ProjectsSection';
import SocialSection from './components/SocialSection';
import CenterComponent from './components/CenterComponent';
export default function About() {

 
 

  return (
    //color de fondo blanco
    <div style={{ 
      backgroundColor: "#000000"
    }}>
   <CenterComponent >
    {/* Propiedades de las letras a la derecha de la imagen */}
      <main style={{
        display: 'flex',
        width: '100%',
        textAlign: 'left',
      }}>
        <div style={{
          width: '155px', // Ancho del contenedor con borde
          height: '155px', // Altura del contenedor con borde
          borderRadius: '30%', // Forma circular
          border: '2px solid #32beb7', // Borde gris
          marginRight: '20px', // Espacio entre la imagen y el texto
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '150px', // Ancho de la imagen
            height: '150px', // Altura de la imagen
            borderRadius: '30%', // Forma circular
            overflow: 'hidden', // Oculta partes de la imagen que desbordan
          }}>
            <img
              src="/icons/foto.jpg" 
              alt="foto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
        {/* Propiedades del texto de imagen Darwin Alves y descripcion */}
        <div style={{
            marginTop: "30px",
            justifyContent: "left",
            marginLeft: "1px"
          }}>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#5c5c5c' }}>
            Darwin Alves
          </p>
          <p style={{ fontSize: '1.0rem', fontWeight: 'normal', color: '#7d7d7d' }}>
          I am an IT technician, welcome to my web portal
  
          </p>
          <p style={{ fontSize: '3.0rem', fontWeight: 'normal', color: '#7d7d7d' }}>
          <FaRegFilePdf />
          <FaLinkedin />
          </p>
        
        </div>
      </main>
      <Separador />
      
      <AboutMeSection /> 
      
      <ProjectsSection />

      <SocialSection ></SocialSection>  
      </CenterComponent>
 
    <CopyrightsSection></CopyrightsSection>
    </div>
    
  );
}