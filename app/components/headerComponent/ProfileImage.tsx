/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
interface ProfileImageProps {
  isDarkMode: boolean;
  language: string;
  
}

const ProfileImage: React.FC<ProfileImageProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -50,
      });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
    
      animate={controls}
      style={
        {
      marginLeft: "-610px",
      marginBottom: "5px",
      }}
    >
      <div
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '30%',
          border: `6px solid ${isDarkMode ? '#171e2d' : '#ffffff'}`,
          marginLeft: '-70px',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `${isDarkMode ? '#2b3444' : '#32beb7'}`,
          boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1)',
        
        }}
      >
        <div
          style={{
            width: '53px',
            height: '53px',
            borderRadius: '30%',
            border: `2px solid ${isDarkMode ? '#2b3444' : '#32beb7'}`,
            marginRight: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#32beb7',
            marginLeft: '-3.5px',
            marginTop: '-3.1px',
        
          }}
        >
          <div
            style={{
              width: '51px',
              height: '51px',
              borderRadius: '30%',
              overflow: 'hidden',
              marginLeft: '-1px',
              marginTop: '-1px',
           
            }}
          >
            <img
              src="/images/foto.jpg"
              alt="foto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "-42px",
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: isDarkMode ? '#fff' : '#5c5c5c',
         
        }}
      >
        Darwin Alves
      </div>
    </motion.div>
  );
};

export default ProfileImage;
