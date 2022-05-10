import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll/modules'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks
} from './NavbarElements'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

    return (
      <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>NS</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Om mig</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="skills"
                     smooth={true} 
                     duration={500} 
                     spy={true} 
                     exact='true' 
                     offset={-80}>Kompetenser</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="projects"
                     smooth={true} 
                     duration={500} 
                     spy={true} 
                     exact='true' 
                     offset={-80}>Projekt</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="contact"
                     smooth={true} 
                     duration={500} 
                     spy={true} 
                     exact='true' 
                     offset={-80}>Kontakt</NavLinks>
                  </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
      </> 
    );
}

export default Navbar
