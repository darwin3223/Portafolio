/* eslint-disable @next/next/no-page-custom-font */
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';
import { TbLetterESmall, TbLetterNSmall } from "react-icons/tb";

interface ProjectsSectionProps {
  isDarkMode: boolean;
  language: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    borderRadius: '10px',
    overflow: "hidden",
    marginTop: '20px',
    position: 'relative',
    backgroundColor: isDarkMode ? '#2b3544' : '#effaf6',
    height: '200px',
    width: '320px',
    display: 'flex',
    flexDirection: 'row',
  };

  const imageStyle = {
    width: '320px',
    height: '200px',
    transform: isHovered ? 'translate(-8px, -8px)' : 'translate(0, 0)',
    transition: 'transform 0.3s',
    borderRadius: '10px',
    marginTop: '30px',
    marginLeft: '30px',
    marginBottom: '-18px',
  };

  const titleStyle = {
    flex: 1,
    color: isDarkMode ? '#f1f5f9' : '#000000',
    marginLeft: '20px',
    marginTop: "25px",
    fontSize: '1.4rem',
    fontWeight: 'bold',
    fontFamily: 'Archivo, sans-serif',
    display: 'flex',
    alignItems: 'center',
  };

  const descriptionStyle = {
    flex: 1,
    color: isDarkMode ? '#f1f5f9' : '#000000',
    marginTop: '5px',
    marginLeft: '20px',
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex' }}>
        <a href="https://github.com/darwin3223/PFT-Android-Aplication" target="_blank" rel="noopener noreferrer">
          <div className="project-container" style={containerStyle}>
            <Image
              src="/images/Android-Aplication.png"
              alt="Web App Project"
              width={400}
              height={400}
              style={imageStyle}
              className="project-image"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </a>
        <div>
          <h1 style={titleStyle}>
            {language === 'ES' ? 'UTEC Aplicación Kotlin' : 'UTEC Kotlin Application'}
          </h1>
          <h1 style={descriptionStyle}>
            {language === 'ES' ? 'Aplicación Android para la gestión de usuarios de la universidad de UTEC.' : 'Android application for managing users at UTEC university.'}
          </h1>
          <div style={{ marginLeft: '20px', marginTop: '10px', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <Tooltip
              content="Kotlin"
              placement="bottom"
              style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
            >
              <svg width="25px" height="25px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <defs> <linearGradient x1="26.599%" y1="146.559136%" x2="73.8446667%" y2="52.3813953%" id="linearGradient-1"> <stop stop-color="#0095D5" offset="9.677%"> </stop> <stop stop-color="#238AD9" offset="30.07%"> </stop> <stop stop-color="#557BDE" offset="62.11%"> </stop> <stop stop-color="#7472E2" offset="86.43%"> </stop> <stop stop-color="#806EE3" offset="100%"> </stop> </linearGradient> <linearGradient x1="13.9840532%" y1="37.1049231%" x2="68.682392%" y2="-13.5538462%" id="linearGradient-2"> <stop stop-color="#0095D5" offset="11.83%"> </stop> <stop stop-color="#3C83DC" offset="41.78%"> </stop> <stop stop-color="#6D74E1" offset="69.62%"> </stop> <stop stop-color="#806EE3" offset="83.33%"> </stop> </linearGradient> <linearGradient x1="-16.8361667%" y1="91.9396667%" x2="76.2191667%" y2="-1.11566667%" id="linearGradient-3"> <stop stop-color="#C757BC" offset="10.75%"> </stop> <stop stop-color="#D0609A" offset="21.38%"> </stop> <stop stop-color="#E1725C" offset="42.54%"> </stop> <stop stop-color="#EE7E2F" offset="60.48%"> </stop> <stop stop-color="#F58613" offset="74.3%"> </stop> <stop stop-color="#F88909" offset="82.32%"> </stop> </linearGradient> </defs> <g> <polygon fill="url(#linearGradient-1)" points="0 256 128.426667 127.573333 256 256"> </polygon> <polygon fill="url(#linearGradient-2)" points="0 0 128.426667 0 0 138.666667"> </polygon> <polygon fill="url(#linearGradient-3)" points="128.426667 0 0 135.253333 0 256 128.426667 127.573333 256 0"> </polygon> </g> </g>

</svg>
            </Tooltip>
            <Tooltip
              content="GitHub"
              placement="bottom"
              style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
            >
              <svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
            </Tooltip>
            <Tooltip
              content="SQL"
              placement="bottom"
              style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
            >
              <svg width="25px" height="25px" viewBox="-8.78 0 70 70" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                
                 <path d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z" fill="#00bcf2" transform="translate(-830.906 -943.981)"></path> </g></svg>
            </Tooltip>
          </div>
        </div>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default ProjectsSection;
