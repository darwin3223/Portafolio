/* eslint-disable @next/next/no-page-custom-font */
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '20px',  
    position: 'relative',
    backgroundColor: isDarkMode ? '#2b3544' : '#effaf6',
    height: '200px',  
    width: '320px',   
    display: 'flex',
    flexDirection: 'row',
  };

  const imageStyle = {
    width: '320px',
    height: '200px',
    transform: isHovered ? 'translate(-8px, -8px)' : 'translate(0, 0)',
    transition: 'transform 0.3s',
    borderRadius: '10px',
    marginTop: '30px',
    marginLeft: '30px',
    marginBottom: '-18px',
  };

  const titleStyle = {
    flex: 1,
    color: isDarkMode ? '#f1f5f9' : '#000000',
    marginLeft: '20px',
    marginTop: "25px",
    fontSize: '1.5rem',  
    fontWeight: 'bold',
    fontFamily: 'Archivo, sans-serif',
    display: 'flex',     
    alignItems: 'center',  
  };

  const descriptionStyle = {
    flex: 1,
    color: isDarkMode ? '#f1f5f9' : '#000000',
    marginTop: '5px',
    marginLeft: '20px',
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex' }}>
        <a href="https://github.com/darwin3223/Password-Generator" target="_blank" rel="noopener noreferrer">
          <div className="project-container" style={containerStyle}>
            <Image
              src="/images/PasswordGenerator.jpg"
              alt="Web App Project"
              width={400}
              height={400}
              style={imageStyle}
              className="project-image"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </a>
        <div>
          <h1 style={titleStyle}>Generador Contraseña </h1>
          <h1 style={descriptionStyle}>
           Generador de contraseñas basado en frases, símbolos, números y letras.
          </h1>
          <div style={{ marginLeft: '20px', marginTop: '10px', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
          <Tooltip
        
        content="Next.js"
        placement="bottom"
        style={{color:isDarkMode ? '#ffffff' : '#000000' }}
      >
  <Image
    src="/svg/NextIcon.svg"
    alt="NextIcon"
    width={27}
    height={27}
    className="ICON"
    draggable="false"
    style={{ marginRight: '3px' }}
  />
  </Tooltip>
       <Tooltip
        
        content="TypeScript"
        placement="bottom"
        style={{color:isDarkMode ? '#ffffff' : '#000000' }}
      >
  <Image
    src="/svg/TypeScriptIcon.svg"
    alt="TypeScriptIcon"
    width={28}
    height={28}
    className="ICON"
    draggable="false"
    style={{ marginRight: '3px' }}
  />
  </Tooltip>
  <Tooltip
        
        content="JavaScript"
        placement="bottom"
        style={{color:isDarkMode ? '#ffffff' : '#000000' }}
      >
  <Image
    src="/svg/JavaScriptIcon.svg"
    alt="JavaScrip Icon"
    width={24}
    height={24}
    className="ICON"
    draggable="false"
    style={{ marginRight: '3px' }}
  />
  </Tooltip>
  <Tooltip
        
        content="CSS"
        placement="bottom"
        style={{color:isDarkMode ? '#ffffff' : '#000000' }}
      >
  <Image
    src="/svg/CssIcon.svg"
    alt="CSS ICON"
    width={27}
    height={27}
    className="ICON"
    draggable="false"
    style={{ marginRight: '3px' }}
  />
  </Tooltip>
  <Tooltip
        
        content="GitHub"
        placement="bottom"
        style={{color:isDarkMode ? '#ffffff' : '#000000' }}
      >
  <Image
    src="/svg/GitHubIcon.svg"
    alt="GitHub Icon"
    width={24}
    height={24}
    className="ICON"
    draggable="false"
    style={{ marginRight: '3px' }}
  />
  </Tooltip>
</div>
        </div>

      </div>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default ProjectsSection;
