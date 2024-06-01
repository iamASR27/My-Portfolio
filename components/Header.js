import React, {useState} from "react";
import Link from "next/link";
import "@/styles/Header.scss";

const Header = ({ scrolled }) => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  // const smoothScrollTo = (targetId) => {
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     window.scrollTo({
  //       top: targetElement.offsetTop,
  //       behavior: "smooth"
  //     });
  //   }
  // };

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__inner">
      <Link href="#home">&lt;Amar /&gt;</Link>
      <div className={`navlinks ${showNavLinks ? "show" : ""}`}>
        <Link href="#projects">Projects</Link>
        <Link href="https://drive.google.com/file/d/1l15cneQIwu694hWLG2s03BSSvBT5xeVB/view?usp=sharing" target="_blank">Resume</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
      </div>
      </div>
      <div className="toggle-button" onClick={toggleNavLinks}>&#9776;</div>
    </div>
  );
};

export default Header;
