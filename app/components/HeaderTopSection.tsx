import React, { useState, useEffect } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { IoSunnySharp, IoLanguage } from 'react-icons/io5';
import { TbLetterESmall, TbLetterSSmall, TbLetterNSmall } from "react-icons/tb";
import HeaderProfile from './headerComponent/ProfileImage';

interface HeaderTopSectionProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  language: string;
}

const HeaderTopSection: React.FC<HeaderTopSectionProps> = ({ isDarkMode, toggleTheme, toggleLanguage, language }) => {
  const [currentLetter, setCurrentLetter] = useState(<TbLetterSSmall />);

  useEffect(() => {
    // Actualizar la letra actual según el idioma seleccionado
    if (language === 'ES') {
      setCurrentLetter(<TbLetterSSmall />);
    } else {
      setCurrentLetter(<TbLetterNSmall />);
    }
  }, [language]);

  return (
   
<div className={`fixed  inset-x-0 top-0 p-4 flex flex-col md:flex-row items-center bg-${isDarkMode ? '#1f2937' : '#fffff'} text-${isDarkMode ? 'white' : 'gray-900'} z-50 left-3/4 transform -translate-x-1/2 ml-[8px] md:ml-[65px]`}>



      <div className="sticky cursor-pointer text-2xl mb-[15px] mt-[13px] md:mb-0 md:mr-4" onClick={toggleTheme}>
        {isDarkMode ? <FaRegMoon /> : <IoSunnySharp />}
      </div>
      <div className="sticky cursor-pointer text-2xl ml-[70px] mt-[-39px]  md:mt-[15px] md:ml-[0px]" onClick={toggleLanguage}>
        <IoLanguage />
      </div>
      <div className="ml-[85px] mt-[-36px] mb-2 md:ml-[-10px] md:mb-0 text-1.4rem flex items-center md:mt-[-20px]">
        <TbLetterESmall />
      </div>
      <div className="ml-[97px] mt-[-24px] md:ml-[-10px] text-1.4rem flex items-center md:mt-[-20px]">
  {currentLetter}
</div> 
<div className=" ml-[825px] mt-[-30px] md:ml-[0] md:mt-[-1px]">
      <HeaderProfile isDarkMode={isDarkMode} language={language} />
      </div>
      </div>

  );
};

export default HeaderTopSection;
