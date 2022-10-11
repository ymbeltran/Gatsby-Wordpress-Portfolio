import React, {useEffect, useState, useCallback} from 'react'
import { Link } from 'react-scroll';

const Menu = () => {
  const [currentMenu, setCurrentMenu]=useState("home");

  const handleClick = useCallback (event => {
    console.log("hola?: ", event.target.id);
    setCurrentMenu(event.target.id)
  },[setCurrentMenu])

  useEffect(() => {
    const menuNav = document.getElementById("nav-wrap");

    const handleScroll = event => {
      if (window.scrollY > 100 && window.scrollY < 400) {
        menuNav.classList.add("hidden");
        menuNav.classList.remove("visible");
      }else{
        menuNav.classList.remove("hidden");
        menuNav.classList.add("visible");
        if (window.scrollY > 400) {
          menuNav.classList.add("opaque");
          menuNav.classList.remove("light");
        }else{
          menuNav.classList.add("light");
          menuNav.classList.remove("opaque");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <nav id="nav-wrap" className='light' >
          <ul id="nav" className="nav">
          <li className={currentMenu==="home"&&"current"}>
          <Link id="home" to="hero" smooth duration={1000}  onClick={handleClick}>
              Home
          </Link>
          </li>

          <li className={currentMenu==="about-menu"&&"current"}>
          <Link id='about-menu' to="about" smooth duration={1000} onClick={handleClick}>
              About
          </Link>
          </li>

          <li className={currentMenu==="resume"&&"current"}>
            <Link id='resume' to="about" smooth duration={1000} onClick={handleClick}>
              Resume
            </Link>
          </li>

          <li className={currentMenu==="projects-menu"&&"current"}>
          <Link id='projects-menu' to="projects" smooth duration={1000} onClick={handleClick}>
              Projects
          </Link>
          </li>

          <li className={currentMenu==="contact-menu"&&"current"}>
          <Link id='contact-menu' to="contact" smooth duration={1000} onClick={handleClick}>
              Contact
          </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Menu