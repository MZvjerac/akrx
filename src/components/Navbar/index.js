import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,  NavBtn, NavBtnLink} from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    
    const[scrollNav, setSrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setSrollNav(true);
        }
        else{
            setSrollNav(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
        }, []);

    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>AKRx</NavLogo>       
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={550} spy={true} exact='true' offset={-80}>
                                About Us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'smooth={true} duration={550} spy={true} exact='true' offset={-80}>
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu> 
                    {/* <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>             */}
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
