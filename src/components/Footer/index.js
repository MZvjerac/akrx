import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
    
    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink  to="about">
                                    About Us
                                </FooterLink>
                                                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact US</FooterLinkTitle>
                                
                                <FooterLink  to="contact">
                                    Contact Us
                                </FooterLink>                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>                                
                                <FooterLink  to="/">
                                    Facebook
                                </FooterLink> 
                                <FooterLink  to="/">
                                    Twitter
                                </FooterLink>
                                <FooterLink  to="/">
                                    Instagram
                                </FooterLink>
                                <FooterLink  to="/">
                                    LinkedIn
                                </FooterLink>                           
                        </FooterLinkItems>                        
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            AKRx
                        </SocialLogo>
                        <WebsiteRights>
                            AKRx © {new Date().getFullYear()} all rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href='/' target="blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href='/' target="blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href='/' target="blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
