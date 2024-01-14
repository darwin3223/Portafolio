import React from 'react';
import Link from 'next/link';

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

const CopyrightsSection: React.FC = () => {
  return (

      <footer style={footerStyle}>
        <p style={{ fontSize: '0.8rem', color: "#7ac7c1" }}>
          Copyright {new Date().getFullYear()} @ Almost all rights reserved{" "}
          <Link href="https://www.linkedin.com/in/darwin-alves" target="_blank">
            <span style={grayClickableText}>Darwin Alves</span>
          </Link>
        </p>
      </footer>

  );
};

export default CopyrightsSection;