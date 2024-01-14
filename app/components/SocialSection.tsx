// components/SocialSection.js
"use client";
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TiSocialAtCircular } from "react-icons/ti";

const SocialContainer = styled.div`
  margin-top: 35px;
`;
const IconCenter = styled.div`
   display: 'flex';
   alignItems: 'center' ;

`;
const SocialText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #32beb7;
  margin-bottom: -31px;
  
`;

const AtIcon = styled(TiSocialAtCircular)`
  font-size: 2.0rem;
  color: #32beb7;
  margin-left: 61px;
  fontWeight: bold;
  
`;

const SocialButtonContainer = styled.div`
  display: flex;
  margin-top: 14px;
`;

const SocialButton = styled.a`
  background-color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0 2px #ccc;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 4px #ccc;
    transition: box-shadow 0.3s ease;

  }
`;

const SocialIcon = styled.div`
  margin-right: 10px;
  font-size: 1.5rem;
  color: ${(props) => props.iconColor || '#000'};
`;

const SocialTextContent = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.textColor || '#000'};
`;

const SocialSection = () => {
  return (
    <SocialContainer>
      
   <IconCenter>
      <SocialText>Social</SocialText>
      <AtIcon />
    </IconCenter>
      <SocialButtonContainer>
        <SocialButton href="https://www.linkedin.com/in/darwin-alves" target="_blank">
          <SocialIcon iconColor="#0077b5">
            <FaLinkedin />
          </SocialIcon>
          <SocialTextContent textColor="#0077b5">LinkedIn</SocialTextContent>
        </SocialButton>
        <SocialButton href="https://github.com/darwin3223?tab=repositories" target="_blank">
          <SocialIcon iconColor="#000">
            <FaGithub />
          </SocialIcon>
          <SocialTextContent textColor="#000">GitHub</SocialTextContent>
        </SocialButton>
        <SocialButton href="https://www.instagram.com/darwin_3223/" target="_blank">
          <SocialIcon iconColor="#bc2a8d">
            <FaInstagram />
          </SocialIcon>
          <SocialTextContent textColor="#bc2a8d">Instagram</SocialTextContent>
        </SocialButton>
      </SocialButtonContainer>
    </SocialContainer>
  );
};

export default SocialSection;
