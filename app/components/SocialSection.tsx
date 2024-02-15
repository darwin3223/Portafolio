// components/SocialSection.js
"use client";
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TiSocialAtCircular } from "react-icons/ti";

const SocialContainer = styled.div`
  margin-top: 40px;
`;

const AtIcon = styled(TiSocialAtCircular)`
  font-size: 2.0rem;
  color: #32beb7;
  margin-left: 61px;
  font-weight: bold;
`;

const SocialButtonContainer = styled.div`
  display: flex;
  margin-top: 14px;
`;

const SocialButton = styled.a`
  background-color: ${(props) => (props.isDarkMode ? '#2b3544' : '#fff')};
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0 2px ${(props) => (props.isDarkMode ? '#51565b' : '#e3e4e6')};
  transition: box-shadow 0.1s ease, background-color 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 4px ${(props) => (props.isDarkMode ? '#51565b' : '#e3e4e6')};
    transition: box-shadow 0.1s ease;
  }
`;

const SocialIcon = styled.div`
  margin-right: 10px;
  font-size: 1.5rem;
  color: ${(props) => (props.iconColor || (props.isDarkMode ? '#fff' : '#000'))};
`;

const SocialTextContent = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.textColor || (props.isDarkMode ? '#fff' : '#000'))};
`;

const SocialSection = ({ isDarkMode }) => {
  return (
    <SocialContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#32beb7' }}>
          Social
        </p>
        <AtIcon style={{ marginLeft: '5px', marginTop: '-1px', fontSize: '1.9rem', color: '#32beb7' }} />
      </div>
      <SocialButtonContainer>
        <SocialButton href="https://www.linkedin.com/in/darwin-alves" target="_blank" isDarkMode={isDarkMode}>
          <SocialIcon iconColor="#0077b5" isDarkMode={isDarkMode}>
            <FaLinkedin />
          </SocialIcon>
          <SocialTextContent textColor="#0077b5" isDarkMode={isDarkMode}>LinkedIn</SocialTextContent>
        </SocialButton>
        <SocialButton href="https://github.com/darwin3223?tab=repositories" target="_blank" isDarkMode={isDarkMode}>
          <SocialIcon iconColor="#000" isDarkMode={isDarkMode}>
            <FaGithub />
          </SocialIcon>
          <SocialTextContent textColor="#000" isDarkMode={isDarkMode}>GitHub</SocialTextContent>
        </SocialButton>
        <SocialButton href="https://www.instagram.com/darwin_3223/" target="_blank" isDarkMode={isDarkMode}>
          <SocialIcon iconColor="#bc2a8d" isDarkMode={isDarkMode}>
            <FaInstagram />
          </SocialIcon>
          <SocialTextContent textColor="#bc2a8d" isDarkMode={isDarkMode}>Instagram</SocialTextContent>
        </SocialButton>
      </SocialButtonContainer>
    </SocialContainer>
  );
};

export default SocialSection;
