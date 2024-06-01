"use client"
import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import '@/styles/Home.scss';

const Home = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typedText = "Passionate about changing the world with technology. ";

  useEffect(() => {
    if (currentIndex < typedText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + typedText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);


  return (
    <div className='home' id="home">
      <div className='home__name'>Amardeep Singh Rawat</div>
      <div className='home__text'>{text}</div>
      <div className='home__icons'>
      <Link href="https://github.com/iamASR27" target='_blank'><FaGithub /></Link>
      <Link href="https://www.linkedin.com/in/amardeep-rawat-8004b02a8/" target='_blank'><FaLinkedin /></Link>
    </div>
      <Link href="#about"><button className='home__btn'>More about me</button></Link>
      </div>
  )
}

export default Home