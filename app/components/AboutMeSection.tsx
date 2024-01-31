import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { FaStarHalfAlt } from 'react-icons/fa';

interface AboutMeSectionProps {
  isDarkMode: boolean;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ isDarkMode }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: isDarkMode ? '#74c4ba' : '#32beb7' }}>
          Sobre mí y mis habilidades
        </p>
        <FaStarHalfAlt style={{ marginLeft: '8px', marginTop: '-5px', fontSize: '1.9rem', color: isDarkMode ? '#74c4ba' : '#32beb7' }} />
      </div>
      <header
        style={{
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <GoDotFill style={{ marginLeft: '1px', marginTop: '-14px', fontSize: '0.9rem', color: isDarkMode ? '#f1f5f9' : '#5c5c5c' }} />
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', color: isDarkMode ? '#f1f5f9' : '#000000', marginLeft: '5px', marginTop: '10px' }}>
            Soy estudiante en la Universidad de UTEC Uruguay, actualmente soy técnico superior universitario
            en tecnologías de la información.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <GoDotFill style={{ marginLeft: '1px', marginTop: '-100px', fontSize: '3.3rem', color: isDarkMode ? '#f1f5f9' : '#5c5c5c' }} />
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', color: isDarkMode ? '#f1f5f9' : '#000000', marginLeft: '5px', marginTop: '10px' }}>
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
