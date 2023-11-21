import React from 'react';
import { SiGmail } from 'react-icons/si';
import { AiOutlineHome, AiOutlineSchedule } from 'react-icons/ai';
import { MdOutlineMail, MdPhoneAndroid } from 'react-icons/md';
import { BiUser, BiLaptop } from 'react-icons/bi';
import { GiEvilBook } from 'react-icons/gi';
import { HiOutlineCode } from 'react-icons/hi';
import { FaLaptopCode, FaEye } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { VscSymbolInterface } from 'react-icons/vsc';
import { CgWebsite } from 'react-icons/cg';
import { SiGoogleoptimize } from 'react-icons/si';
import { IoIosCall } from 'react-icons/io';

export const NavbarData = [
  {
    title: 'Home',
    icon: <AiOutlineHome />,
    link: '/',
  },
  {
    title: 'About Me',
    icon: <BiUser />,
    link: '/about',
  },
  {
    title: 'Resume',
    icon: <BiLaptop />,
    link: '/resume',
  },
  {
    title: 'Portfolio',
    icon: <AiOutlineSchedule />,
    link: '/portfolio',
  },
  {
    title: 'My Blog',
    icon: <AiOutlineSchedule />,
    link: '/blog',
  },
  {
    title: 'Contact Me',
    icon: <MdOutlineMail />,
    link: '/contact',
  },
];

export const ServicesData = [
  {
    title: 'Responsive Web Design',
    icon: <BiLaptop size={42} />,
    content:
      ' Creating websites that adapt and display properly on various devices and screen sizes, providing an optimal user experience.',
  },
  {
    title: 'HTML/CSS Development',
    icon: <TiHtml5 size={48} />,
    content:
      'Writing clean and semantic HTML markup and CSS styles to structure and style web content.',
  },
  {
    title: 'JavaScript Development',
    icon: <HiOutlineCode size={35} />,
    content:
      ' Building interactive and dynamic elements on web pages using JavaScript, such as animations, form validations, and AJAX functionality.',
  },
  {
    title: 'Framework-Based Development',
    icon: <FaLaptopCode size={38} />,
    content:
      'Utilizing front-end frameworks like React JS, Next JS,TypeScript and React Native  to develop robust and scalable web applications.',
  },
  {
    title: 'Cross-browser mobile app development',
    icon: <MdPhoneAndroid size={38} />,
    content:
      'A cross-browser mobile app are hybrid mobile app, is a type of mobile application that is designed to work on multiple mobile platforms and operating systems, such as Android and iOS',
  },
  {
    title: 'User Interface (UI) Design',
    icon: <VscSymbolInterface size={38} />,
    content:
      'Designing visually appealing and user-friendly interfaces, including the layout, typography, color schemes, and graphical elements.',
  },
  {
    title: 'User Experience (UX) Design',
    icon: <FaEye size={38} />,
    content:
      ' Focusing on enhancing user satisfaction by improving the usability, accessibility, and overall experience of the website or application.',
  },
  {
    title: 'Front-end Testing Optimization',
    icon: <SiGoogleoptimize size={35} />,
    content:
      'Conducting tests to ensure the functionality, performance, and cross-browser compatibility of front-end code, as well as optimizing for speed and efficiency.',
  },
  {
    title: 'Single-Page Applications',
    icon: <GiEvilBook size={38} />,
    content:
      'Developing web applications that function within a single web page, providing a seamless and responsive user experience.',
  },
  {
    title: 'Progressive Web Applications',
    icon: <CgWebsite size={38} />,
    content:
      ' Creating web applications that offer an app-like experience, including offline functionality, push notifications, and home screen installation',
  },
];

export const PersonalData = [
  {
    title: 'Name',
    value: 'M Muavia Haidri',
  },
  {
    title: 'Age',
    value: '23 Years',
  },

  {
    title: 'Phone',
    value: '+92306-0011199',
    icon: <IoIosCall size={35} color="#00a3e1" />,
  },
  {
    title: 'email',
    value: 'muavia00842@gmail.com',
    icon: <SiGmail size={35} color="#00a3e1" />,
  },
  {
    title: 'Country',
    value: 'Pakistan',
  },
];
