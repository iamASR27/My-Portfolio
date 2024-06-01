"use client"
import { useEffect, useState } from "react";
import Home from "@/components/Home";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import "./page.scss";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main">
      <Header scrolled={scrolled}/>
     <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
