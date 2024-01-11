/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const MyProfileSection: React.FC = () => {
  return (
    <main style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'left',
    }}>
      <div style={{
        width: '155px', 
        height: '155px', 
        borderRadius: '30%', 
        border: '2px solid #32beb7', 
        marginRight: '20px', 
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '150px', 
          height: '150px', 
          borderRadius: '30%', 
          overflow: 'hidden', 
        }}>
          <img
            src="/icons/foto.jpg" 
            alt="foto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: "-4px",
        justifyContent: "left",
        marginLeft: "1px"
      }}>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#5c5c5c' }}>
          Darwin Alves
        </p>
        <p style={{ fontSize: '1.0rem', fontWeight: 'normal', color: '#7d7d7d' }}>
          I am an IT technician, welcome to my portfolio web.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#a7f3d0',
            color: '#4f7463',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold', 
            marginRight: '10px',
            fontSize: '0.7rem',
            
          }}>
            <FaRegFilePdf style={{ marginRight: '5px', color: '#5c5c5c', fontSize: '1.4rem' }} />
            Resume
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#a7f3d0',
            color: '#4f7463',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold', 
            fontSize: '0.7rem',
          
          }}>
            <FaLinkedin style={{ marginRight: '5px', color: '#5c5c5c', fontSize: '1.4rem' }} />
            LinkedIn
          </button>
        </div>
      </div>
    </main>
  );
};

export default  MyProfileSection;