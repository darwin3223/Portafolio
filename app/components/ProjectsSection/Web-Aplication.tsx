/* eslint-disable @next/next/no-page-custom-font */
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { PiSuitcaseSimpleFill } from 'react-icons/pi';

const ProjectsSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '20px',  // Ajustado en comparación con el primer código
    position: 'relative',
    backgroundColor: '#effaf6',
    height: '200px',  // Ajustado en comparación con el primer código
    width: '320px',   // Ajustado en comparación con el primer código
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
    fontSize: '1.5rem',  // Ajustado en comparación con el primer código
    fontWeight: 'bold',
    fontFamily: 'Archivo, sans-serif',
    display: 'flex',     // Ajustado en comparación con el primer código
    alignItems: 'center',  // Ajustado en comparación con el primer código
  };

  const descriptionStyle = {
    flex: 1,
    color: '#000000',
    marginTop: '5px',
    marginLeft: '20px',
  };

  return (
    <div style={{ marginTop: '40px' }}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>Proyectos</p>
          <PiSuitcaseSimpleFill style={{ marginLeft: '8px', marginTop: '-0px', fontSize: '1.9rem', color: '#32beb7' }} />
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
          </div>
        </div>
 
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default ProjectsSection;
