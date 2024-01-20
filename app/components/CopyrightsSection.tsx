"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const footerStyle = {
  bottom: '0',
  fontWeight: 'bold',
  padding: '15px',
  position: 'fixed',
  marginLeft: "71.5px",
  textAlign: 'center',
  borderRadius: "10px",
  backgroundColor: '#FFFFFF',
  transition: 'bottom 0.5s ease',
};

const grayClickableText = {
  color: '#32beb7',
  cursor: 'pointer',
  textDecoration: 'underline',
  marginRight: '10px',
};

const centerFooterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CopyrightsSection: React.FC = () => {
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
    <footer style={{ ...footerStyle, bottom: showFooter ? '0' : '-100px' }}>
      <div style={centerFooterStyle}>
        <p style={{ fontSize: '0.8rem', color: '#7ac7c1' }}>
          Copyright {new Date().getFullYear()} @ Casi todos los derechos reservados{' '}
          <Link href="https://www.linkedin.com/in/darwin-alves" target="_blank">
            <span style={grayClickableText}>Darwin Alves</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default CopyrightsSection;
