import React from "react";
import Image from "next/image";
import Link from "next/link";
import '@/styles/About.scss';

const About = () => {
    
  return (
    <div className="about" id="about">
      <div className="about__image">
        <Image src="/placeholder.png" alt="about" width={500} height={500} loading="lazy"/>
      </div>
      <div className="about__description">
        <h1>About Me</h1>
        <p>
          My name is Amardeep Singh Rawat. I am a BE graduate of 2020 from
          University Institute of Technology, RGPV at Bhopal(M.P). I am an aspiring Frontend developer. I want to work in an
          environment which encourages me to succeed and grow professionally
          where I can utilize my skills and knowledge appropriately.
        </p>
        <Link href='https://drive.google.com/file/d/1l15cneQIwu694hWLG2s03BSSvBT5xeVB/view?usp=sharing' target="_blank"><button>Resume</button></Link>
      </div>
    </div>
  );
};

export default About;
