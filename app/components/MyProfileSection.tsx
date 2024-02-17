/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { FaRegFilePdf, FaLinkedin } from 'react-icons/fa';

interface MyProfileSectionProps {
  isDarkMode: boolean;
  language: 'EN' | 'ES'; // Asegura que language solo puede ser 'EN' o 'ES'
}

const MyProfileSection: React.FC<MyProfileSectionProps> = ({ isDarkMode, language }) => {
  const [isResumeHovered, setResumeHovered] = useState(false);
  const [isLinkedInHovered, setLinkedInHovered] = useState(false);

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: isDarkMode ? '#333' : '#a7f3d0',
    color: isDarkMode ? '#e3e4e6' : '#4f7463',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.7rem',
    textDecoration: 'none',
    marginRight: '10px',
    transition: 'background-color 0.3s, transform 0.2s',
  };

  const resumeLinks = {
    EN: "https://drive.google.com/file/d/1w1a4vdu01Z1I2QhFytxXoDM_wuuaX0CM/view?usp=sharing",
    ES: "https://drive.google.com/file/d/1x_Ocphr01iijq7RGvzdk7Q2RcWeod7AU/view?usp=sharing",
  };
  const linkedinLink = "https://www.linkedin.com/in/darwin-alves";

  const openResume = () => {
    window.open(resumeLinks[language], '_blank');
  };

  return (
    <main
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
      }}
    >
    <div
      style={{
        width: '168px',
        height: '168px',
        borderRadius: '30%',
        border: `6px solid ${isDarkMode ? '#171e2d' : '#FFFFFF'}`, 
        marginRight: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? '#333' : '#FFFFFF', 
        boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
        <div
          style={{
            width: '157px',
            height: '157px',
            borderRadius: '30%',
            border: `2px solid ${isDarkMode ? '#2b3444' : '#32beb7'}`, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: ` ${isDarkMode ? '#2b3444' : '#32beb7'}`, 
          }}
        >
          <div
            style={{
              width: '151px',
              height: '151px',
              borderRadius: '30%',
              overflow: 'hidden',
              marginLeft: "1.2px",
              marginTop: "1.2px",
            }}
          >
            <img
              src="/icons/foto.jpg"
              alt="foto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '-8px',
          justifyContent: 'left',
          marginLeft: '1px',
        }}
      >
        <p
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: isDarkMode ? '#f1f5f9' : '#5c5c5c',
          }}
        >
          Darwin Alves
        </p>
        <p
          style={{
            fontSize: '1.0rem',
            fontWeight: 'normal',
            color: isDarkMode ? '#f1f5f9' : '#7d7d7d',
          }}
        >
          {language === 'EN' ? 'I am an IT technician, welcome to my web portfolio.' : 'Soy técnico IT, bienvenido a mi portafolio web.'}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <a
             href={resumeLinks[language]}
            target="_blank"
            style={{
              ...linkStyle,
              backgroundColor: isResumeHovered ? (isDarkMode ? '#74c4ba'  : '#a7f3d0') : (isDarkMode ? '#74c4ba' : '#a7f3d0'),
              transform: isResumeHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => setResumeHovered(true)}
            onMouseLeave={() => setResumeHovered(false)}
            onClick={openResume}
          >
            <FaRegFilePdf
              style={{
                marginRight: '5px',
                color: isDarkMode ? '#e3e4e6' : '#5c5c5c',
                fontSize: '1.4rem',
              }}
            />
            {language === 'EN' ? 'Resume' : 'Currículum'}
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            style={{
              ...linkStyle,
              backgroundColor: isLinkedInHovered ? (isDarkMode ? '#74c4ba'  : '#a7f3d0') : (isDarkMode ? '#74c4ba' : '#a7f3d0'),
              transform: isLinkedInHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => setLinkedInHovered(true)}
            onMouseLeave={() => setLinkedInHovered(false)}
          >
            <FaLinkedin
              style={{
                marginRight: '5px',
                color: isDarkMode ? '#e3e4e6' : '#5c5c5c',
                fontSize: '1.4rem',
              }}
            />
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
};

export default MyProfileSection;
