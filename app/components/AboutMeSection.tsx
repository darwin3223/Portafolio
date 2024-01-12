import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaStarHalfAlt } from "react-icons/fa";

const AboutMeSection = () => {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
            About me and my skills
          </p>
          <FaStarHalfAlt style={{ marginLeft: '8px', marginTop: '-5px', fontSize: '1.9rem', color: '#32beb7' }} />
        </div>
        <header
      style={{
        // ...otros estilos...
        fontFamily: 'Poppins, sans-serif', // Agrega esta línea para usar la fuente Poppins
      }} >
    
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <GoDotFill style={{ marginLeft: '1px', marginTop: '-14px', fontSize: '0.9rem', color: '#5c5c5c' }} />
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#000000', marginLeft: "5px", marginTop: "10px" }}>
           Soy estudiante en la universidad de UTEC Uruguay, acutalmente soy técnico superior universitario
        en tecnologias de la informacion. </p>
          </div>
     
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <GoDotFill style={{ marginLeft: '1px', marginTop: '-100px', fontSize: '3.3rem', color: '#5c5c5c' }} />
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#000000', marginLeft: "5px", marginTop: "10px" }}>
          Hemos realizado varios proyectos requeridos para la universidad, desde aplicaciones de escritorios desarrolladas en Java,
           aplicaciones Android desarrolladas en Kotlin, también páginas web utilizando xHTML y servicios REST para la sincronización
           con la aplicación Android, todas estas aplicaciones cuentan con testing además de estar corriendo dentro de GNS3 emulando
           una infraestructura real, en un entorno configurado y programado siempre tratando de utilizar buenas prácticas.
            </p>
        </div>
        </header>
      </div>
    );
  };
  
  export default AboutMeSection;