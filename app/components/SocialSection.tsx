import React from 'react';
import { TiSocialAtCircular } from "react-icons/ti";

const socialSection: React.FC = () => {

  return (
    <div style={{
     marginTop: "35px",
   }}>
 
 <div style={{ display: 'flex', alignItems: 'center' }}>
     <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
       Social
     </p>
     <TiSocialAtCircular style={{ marginLeft: '8px', marginTop: '-0px', fontSize: '1.9rem', color: '#32beb7' }} />
   </div>
   
   <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000', marginTop: "10px" }}>
   Facebook <br />
   Instagram<br />
   Linkedin
   </p>
 
   </div> 
   );
 };


export default  socialSection;