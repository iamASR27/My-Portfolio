import React from "react";
import { FaReact } from "react-icons/fa";
import Link from "next/link";
import '@/styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <h1>Get In Touch</h1>
      <p>I am currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, <a style={{color: 'blue'}} href='mailto:ramardeep1997@gmail.com'>ramardeep1997@gmail.com.</a></p>
      <p><strong>&lt; /&gt; with ❤ by <Link href="https://github.com/iamASR27/My-Portfolio" target="_blank"><span>Amardeep Singh Rawat</span></Link> using <FaReact /></strong></p>
    </div>
  );
};

export default Footer;
