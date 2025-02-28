import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById('navbar');
      const navHid = document.getElementById('nav-hid');

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
        navHid.style.top = '17vw';
      } else {
        navbar.style.top = '-200px';
        navHid.style.top = '-200px';
      }

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleNavToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDocumentClick = (event) => {
    // Close the dropdown if the clicked element is not the hamburger icon or the dropdown itself
    if (!event.target.classList.contains('icon-menu') && !event.target.closest('#nav-hid')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isDropdownOpen]);

  return (
    <div>
      <nav id="navbar">
        <div className="container">
          <div className="flexnav">
            <ul>
              <Link to="./">
                <li className="logo">Parth Ganjoo</li>
              </Link>
            </ul>
            <ul className="navico">
              <div id="lines" onClick={handleNavToggle} style={{ display: isDropdownOpen ? 'none' : 'block' }}>
                <span className="icon-menu"></span>
              </div>

              <div id="cross" onClick={handleNavToggle} style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                <span className="icon-close"></span>
              </div>
            </ul>
            <ul className="normal">
              <Link to="./projects">
                <li>Projects</li>
              </Link>
              <Link to="./photography">
                <li>Photography</li>
              </Link>
              <Link to="./about">
                <li>About</li>
              </Link>
              <a href="https://drive.google.com/file/d/1fEVs5Eptzw8nGCimzJ4cS1_D7QVTRsuf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Résumé</a>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container fixedcon" id="nav-hid" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
        <ul>
          <Link to="./projects">
            <li>Projects</li>
          </Link>
          <Link to="./photography">
            <li>Photography</li>
          </Link>
          <Link to="./about">
            <li>About</li>
          </Link>
          <a href="https://drive.google.com/file/d/1fEVs5Eptzw8nGCimzJ4cS1_D7QVTRsuf/view?usp=sharing" target="_blank" rel="noopener noreferrer"><li>Résumé</li></a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
