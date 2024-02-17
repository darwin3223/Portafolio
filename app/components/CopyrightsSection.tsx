// components/CopyrightsSection.js
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface CopyrightsSectionProps {
  isDarkMode: boolean;
  language: string;
}

const footerStyle : React.CSSProperties = {
  bottom: '0',
  fontWeight: 'bold',
  padding: '15px',
  position: 'fixed',
  marginLeft: "71.5px",
  textAlign: 'center',
  borderRadius: "10px",
  transition: 'bottom 0.4s ease',
};

const darkFooterStyle = {
  ...footerStyle,
  backgroundColor: '#1f2937',
  color: '#fff',
};

const grayClickableText = {
  color: '#32beb7',
  cursor: 'pointer',
  textDecoration: 'underline',
  marginRight: '10px',
};

const darkGrayClickableText = {
  ...grayClickableText,
  color: '#a7f3d0', // Change to the link color in dark mode
};

const centerFooterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CopyrightsSection: React.FC<CopyrightsSectionProps> = ({ isDarkMode, language }) => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer style={{ ...footerStyle, ...((isDarkMode && showFooter) ? darkFooterStyle : {}), bottom: showFooter ? '0' : '-100px' }}>
      <div style={centerFooterStyle}>
        <p style={{ fontSize: '0.8rem', color: isDarkMode ? '#7ac7c1' : '#7ac7c1' }}>
          {language === 'ES' ? 'Copyright' : 'Copyright'} {new Date().getFullYear()} @ {language === 'ES' ? 'Casi todos los derechos reservados' : 'Almost all rights reserved'}{' '}
          <Link href="https://www.linkedin.com/in/darwin-alves" target="_blank">
            <span style={isDarkMode ? darkGrayClickableText : grayClickableText}>{language === 'ES' ? 'Darwin Alves' : 'Darwin Alves'}</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default CopyrightsSection;
