import React from 'react';

import { PiSuitcaseSimpleFill } from "react-icons/pi";

const projectsSection: React.FC = () => {
    







  return (
   <div style={{
    marginTop: "35px",
  }}>

<div style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
      Projects
    </p>
    <PiSuitcaseSimpleFill style={{ marginLeft: '8px', marginTop: '-0px', fontSize: '1.5rem', color: '#32beb7' }} />
  </div>
  
  <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000', marginTop: "10px" }}>
  Aplicacion de cafeteria android con firebase <br />
  Aplicacion de gestion de usuarios con SQL
  </p>

  </div> 
  );
};

export default projectsSection;