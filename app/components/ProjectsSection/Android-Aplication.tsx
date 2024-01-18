/* eslint-disable @next/next/no-page-custom-font */
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { SiKotlin } from "react-icons/si";

const ProjectsSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '20px',  
    position: 'relative',
    backgroundColor: '#effaf6',
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
    color: '#000000',
    marginLeft: '20px',
    marginTop: "25px",
    fontSize: '1.4rem',
    fontWeight: 'bold',
    fontFamily: 'Archivo, sans-serif',
    display: 'flex',
    alignItems: 'center',
  };

  const descriptionStyle = {
    flex: 1,
    color: '#000000',
    marginTop: '5px',
    marginLeft: '20px',
  };

  return (
    <div style={{ marginTop: '20px' }}>
      
        <div style={{ display: 'flex' }}>
        <a href="https://github.com/darwin3223/PFT-Android-Aplication" target="_blank" rel="noopener noreferrer">
          <div className="project-container" style={containerStyle}>
            <Image
              src="/images/Android-Aplication.png"
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
            <h1 style={titleStyle}>UTEC Aplicación Kotlin</h1>
            <h1 style={descriptionStyle}>
              Aplicación Android para la gestión <br /> de usuarios de la universidad de UTEC.
            </h1>
          </div>
        </div>
     
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default ProjectsSection;
