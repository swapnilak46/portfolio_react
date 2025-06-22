// Header.jsx
// Navigation component converted from the original static HTML header
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to make the header fixed when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle menu toggle for mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`transparent header-light ${isFixed ? 'fixed' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {/* logo begin */}
              
                  {/* logo close */}
                </div>
              </div>
              <div className="de-flex-col header-col-right">
                <ul id="mainmenu" className={menuOpen ? 'show' : ''}>
                  <li>
                    <a 
                      className="active" 
                      href="#top" 
                      onClick={(e) => handleNavClick(e, '#top')}
                    >
                      Home<span></span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#section-about" 
                      onClick={(e) => handleNavClick(e, '#section-about')}
                    >
                      About me<span></span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#section-services" 
                      onClick={(e) => handleNavClick(e, '#section-services')}
                    >
                      What I Do<span></span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#section-portfolio" 
                      onClick={(e) => handleNavClick(e, '#section-portfolio')}
                    >
                      Portfolio<span></span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#section-resume" 
                      onClick={(e) => handleNavClick(e, '#section-resume')}
                    >
                      My Resume<span></span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#section-blog" 
                      onClick={(e) => handleNavClick(e, '#section-blog')}
                    >
                      Blog<span></span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#section-contact" 
                      onClick={(e) => handleNavClick(e, '#section-contact')}
                    >
                      Contact Me<span></span>
                    </a>
                  </li>
                </ul>
                <div className="menu_side_area">
                  <span 
                    id="menu-btn" 
                    onClick={toggleMenu}
                    className={menuOpen ? 'active' : ''}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
