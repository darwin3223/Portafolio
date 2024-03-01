import React from "react";

interface HeaderBGProps {
  isDarkMode: boolean;
}

const HeaderBG: React.FC<HeaderBGProps> = ({ isDarkMode }) => {
  return (
    <div 
      style={{
        position: "fixed",
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
        paddingTop: "100px",
        paddingLeft: "10540px",
        marginLeft: "-1000px",
        marginTop: "-100px",
        zIndex: "12"
      }}
    ></div>
  );
};

export default HeaderBG;
