import { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';
import { IconContext } from "react-icons";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { TiSocialAtCircular } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import AboutMeSection from './components/AboutMeSection';



export default function About() {

  const footerStyle = {
    bottom: '0',
    fontWeight: 'bold',
    padding: '15px 0'
  };
  const grayClickableText = {
    color: '#32beb7',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginRight: '10px',
  };
  const logoStyle = {
    width: '50px', // Ancho del logotipo
    height: '50px', // Altura del logotipo
    fill: 'url(#halfGreenHalfLightGreen)', // Colores del logotipo
  };
  return (
    //color de fondo blanco
    <div style={{ 
      backgroundColor: "#000000"
    }}>
       {/* Área fija de trabajo centrada */}
    <div style={{ 
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'center', // Centrar verticalmente
      alignItems: 'center', // Centrar horizontalmente
      padding: '100px', // Ajuste de los márgenes horizontal
      backgroundColor: '#FFFFFF',
      maxWidth: '800px', // Ancho máximo fijo
      margin: '0 auto', // Centrar el contenedor en la página
    }}>
    {/* Propiedades de las letras a la derecha de la imagen */}
      <main style={{
        display: 'flex',
        width: '100%',
        textAlign: 'left',
      }}>
        <div style={{
          width: '155px', // Ancho del contenedor con borde
          height: '155px', // Altura del contenedor con borde
          borderRadius: '30%', // Forma circular
          border: '2px solid #32beb7', // Borde gris
          marginRight: '20px', // Espacio entre la imagen y el texto
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '150px', // Ancho de la imagen
            height: '150px', // Altura de la imagen
            borderRadius: '30%', // Forma circular
            overflow: 'hidden', // Oculta partes de la imagen que desbordan
          }}>
            <img
              src="/icons/foto.jpg" 
              alt="foto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
        {/* Propiedades del texto de imagen Darwin Alves y descripcion */}
        <div style={{
            marginTop: "30px",
            justifyContent: "left",
            marginLeft: "1px"
          }}>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#5c5c5c' }}>
            Darwin Alves
          </p>
          <p style={{ fontSize: '1.0rem', fontWeight: 'normal', color: '#7d7d7d' }}>
          I am an IT technician, welcome to my web portal
          <title></title>
          </p>
          <p style={{ fontSize: '3.0rem', fontWeight: 'normal', color: '#7d7d7d' }}>
          <FaRegFilePdf />
          <FaLinkedin />
          </p>

         
        </div>
      </main>
      <div style={{ backgroundColor: '#7ac7c1', paddingTop: '0.1px', paddingBottom: '1px', paddingLeft: "5px", paddingRight: '5px', borderRadius: '8px', marginBottom: '100px', marginTop: "80px"}}>
      </div>
       {/* Habilidades */}
    
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
          About me and my skills <FaStarHalfAlt />

          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000' }}>
          
          <GoDotFill />HTTPS-PHP-JAVA-JAVA-SCRIPT- TEMPORAL
          </p>
          </p>
           {/* Proyectos */}
      <div style={{
            marginTop: "120px",
          }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
          <PiSuitcaseSimpleFill />
          Projects
          
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000' }}>
          Aplicacion de cafeteria android con firebase <br />
          Aplicacion de gestion de usuarios con SQL
          </p>
          </p>
          </div> 
            {/* Redes Sociales */}
      <div style={{
            marginTop: "120px",
          }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
          <TiSocialAtCircular />
          Socials
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#000000' }}>
          Facebook <br />
          Instagram<br />
         Linkedin
          </p>
          </p>
          </div> 
      <footer style={footerStyle}>
        {/* Copyright */}
        <p style={{ fontSize: '0.8rem', color: "#7ac7c1" }}>
          Copyright {new Date().getFullYear()} @ All rights reserved{" "}
          <Link href="https://www.linkedin.com/in/darwin-alves" passHref>
            <span style={grayClickableText}>Darwin Alves</span>
          </Link>
        </p>
      </footer>
    </div>
    </div>
  );
}