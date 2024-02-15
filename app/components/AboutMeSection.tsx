import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { FaStarHalfAlt } from 'react-icons/fa';

interface AboutMeSectionProps {
  isDarkMode: boolean;
  language: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ isDarkMode, language }) => {
  const sectionStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
  };

  const dotStyle = {
    position: 'absolute',
    fontSize: '0.9rem',
    color: isDarkMode ? '#f1f5f9' : '#5c5c5c',
    top: '20',
    transform: 'translateY(-50%)',
    left: '-18',
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: isDarkMode ? '#74c4ba' : '#32beb7' }}>
          {language === 'ES' ? 'Sobre mí y mis habilidades' : 'About me and my skills'}
        </p>
        <FaStarHalfAlt style={{ marginLeft: '8px', marginTop: '-5px', fontSize: '1.9rem', color: isDarkMode ? '#74c4ba' : '#32beb7' }} />
      </div>
      <header
        style={{
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div style={sectionStyle}>
          <GoDotFill style={dotStyle} />
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', color: isDarkMode ? '#f1f5f9' : '#000000', marginTop: '10px' }}>
            {language === 'ES' ? 'Soy estudiante en la Universidad de UTEC Uruguay, actualmente soy técnico superior universitario en tecnologías de la información.' : 'I am a student at UTEC Uruguay University, currently I am a IT technician.'}
          </p>
        </div>

        <div style={sectionStyle}>
          <GoDotFill style={dotStyle} />
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', color: isDarkMode ? '#f1f5f9' : '#000000', marginTop: '10px' }}>
          {language === 'ES' ? 'Hemos realizado varios proyectos requeridos para la universidad, desde aplicaciones de escritorios desarrolladas en Java, aplicaciones Android desarrolladas en Kotlin, también páginas web utilizando xHTML y servicios REST para la sincronización con la aplicación Android, todas estas aplicaciones cuentan con testing además de estar corriendo dentro de GNS3 emulando una infraestructura real, en un entorno configurado y programado siempre tratando de utilizar buenas prácticas.' : 'We have completed several projects required for the university, including desktop applications developed in Java, Android applications developed in Kotlin, as well as web pages using xHTML and REST services for synchronization with the Android application. All these applications have testing and are running within GNS3 emulating a real infrastructure, in a configured and programmed environment always trying to use best practices.'}
          </p>
        </div>
      </header>
    </div>
  );
};

export default AboutMeSection;
