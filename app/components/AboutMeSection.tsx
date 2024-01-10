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




        <div style={{ display: 'flex', alignItems: 'center' }}>
          <GoDotFill style={{ marginLeft: '1px', marginTop: '-11px', fontSize: '0.9rem', color: '#5c5c5c' }} />
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000', marginLeft: "5px", marginTop: "10px" }}>
           Soy estudiante en la universidad de UTEC Uruguay, acutalmente soy técnico superior universitario,
        en tecnologias de la informacion. </p>
          </div>


          <div style={{ display: 'flex', alignItems: 'center' }}>
          <GoDotFill style={{ marginLeft: '1px', marginTop: '-10px', fontSize: '0.9rem', color: '#5c5c5c' }} />
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000', marginLeft: "5px", marginTop: "10px" }}>
           Soy estudiante en la universidad de UTEC Uruguay, acutalmente soy técnico superior universitario,
        en tecnologias de la informacion. </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <GoDotFill style={{ marginLeft: '1px', marginTop: '-10px', fontSize: '0.9rem', color: '#5c5c5c' }} />
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000', marginLeft: "5px", marginTop: "10px" }}>
           Soy estudiante en la universidad de UTEC Uruguay, acutalmente soy técnico superior universitario,
        en tecnologias de la informacion. </p>
        </div>




      </div>
    );
  };
  
  export default AboutMeSection;