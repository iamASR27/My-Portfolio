import React, {useState} from "react";
import Link from "next/link";
// import { usePathname } from 'next/navigation';
import "@/styles/Header.scss";

const Header = ({ scrolled }) => {
  // const pathname = usePathname()
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
        <Link href="#projects" className="link">Projects</Link>
        <Link href="https://drive.google.com/file/d/1l15cneQIwu694hWLG2s03BSSvBT5xeVB/view?usp=sharing" target="_blank" className="link">Resume</Link>
        <Link href="#about" className="link">About</Link>
        <Link href="#skills" className="link">Skills</Link>
      </div>
      </div>
      <div className="toggle-button" onClick={toggleNavLinks}>&#9776;</div>
    </div>
  );
};

export default Header;
