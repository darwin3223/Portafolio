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
    marginTop: '15px',
    position: 'relative',
    backgroundColor: '#effaf6',
  };

  const imageStyle = {
    width: '310px',
    height: '200px',
    transform: isHovered ? 'translate(-8px, -8px)' : 'translate(0, 0)',
    transition: 'transform 0.3s',
    borderRadius: '10px',
    marginTop: '30px',
    marginLeft: '30px',
    marginBottom: '-18px',
  };

  const titleStyle = {
    display: 'flex',
    color: '#000000',
    alignItems: 'center',
    marginLeft: '20px',
    marginTop: '25px',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    fontFamily: 'Archivo, sans-serif',
  };

  const descriptionStyle = {
    color: '#000000',
    marginTop: '5px',
    marginLeft: '20px',

  };

  return (
    <div style={{ marginTop: '35px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>Projects</p>
        <PiSuitcaseSimpleFill style={{ marginLeft: '8px', marginTop: '-0px', fontSize: '1.9rem', color: '#32beb7' }} />
      </div>
      <div style={{ display: 'flex' }}>
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
        <div>
          <h1 style={titleStyle}>UTEC Web Application</h1>
          <h1 style={descriptionStyle}>
          Aplicación web para la gestión <br /> de usuarios de la universidad de UTEC.
          </h1>
        </div>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&display=swap" rel="stylesheet" />
      
    </div>
    
  );
};

export default ProjectsSection;