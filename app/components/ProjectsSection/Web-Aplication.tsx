/* eslint-disable @next/next/no-page-custom-font */
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { PiSuitcaseSimpleFill } from 'react-icons/pi';
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


  const toolTipStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',

  };
  return (
    <div style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: isDarkMode ? '#74c4ba' : '#32beb7' }}>Proyectos</p>
        <PiSuitcaseSimpleFill style={{ marginLeft: '8px', marginTop: '-0px', fontSize: '1.9rem', color: isDarkMode ? '#74c4ba' : '#32beb7' }} />
      </div>
      <div style={{ display: 'flex' }}>
        <a href="https://github.com/darwin3223/PFT-Web-Aplication/tree/master/PFT" target="_blank" rel="noopener noreferrer">
          <div className="project-container" style={containerStyle}>
            <Image
              src="/images/Web-Aplication.jpg"
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
          <h1 style={titleStyle}>UTEC Aplicación Web </h1>
          <h1 style={descriptionStyle}>
            Aplicación Web para la gestión
            de usuarios de la universidad de UTEC.
          </h1>
          
        <div style={{ marginLeft: '20px', marginTop: '10px', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
       
        <Tooltip
         
          content="Java"
          placement="bottom"
          style={{color:isDarkMode ? '#ffffff' : '#000000' }}
        >
        <Image
    src="/svg/JavaIcon.svg"
    alt="HTML Icon"
    width={30}
    height={30}
    className="ICON"
    draggable="false"
    style={{ marginRight: '3px' }}
  />
    </Tooltip>


    <Tooltip
        
          content="HTML"
          placement="bottom"
          style={{color:isDarkMode ? '#ffffff' : '#000000' }}
        >
    <Image
    src="/svg/Htmlcon.svg"
    alt="HTML Icon"
    width={30}
    height={30}
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
    alt="CSS Icon"
    width={30}
    height={30}
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
  <Tooltip
        
        content="SQL"
        placement="bottom"
        style={{color:isDarkMode ? '#ffffff' : '#000000' }}
      >
  <Image
    src="/svg/SqlIcon.svg"
    alt="SQL Icon"
    width={25}
    height={25}
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
