import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) =>(scrollNav ? '#005580' : 'transparent')} ;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex:
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;    
`;

// LinkR = Link koji ce se realizovati pomocu React-Routera i Scroll paketa
export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-top: 25px; 
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: -45px;
    margin-left: 768px;

    @media screen and (max-width: 1016px) {
        margin-left: 748px;
    }

    @media screen and (max-width: 982px) {
        margin-left: 728px;
    }

    @media screen and (max-width: 961px) {
        margin-left: 708px;
    }

    @media screen and (max-width: 941px) {
        margin-left: 688px;
    }

    @media screen and (max-width: 921px) {
        margin-left: 668px;
    }

    @media screen and (max-width: 901px) {
        margin-left: 648px;
    }

    @media screen and (max-width: 881px) {
        margin-left: 628px;
    }

    @media screen and (max-width: 861px) {
        margin-left: 608px;
    }

    @media screen and (max-width: 841px) {
        margin-left: 588px;
    }

    @media screen and (max-width: 821px) {
        margin-left: 568px;
    }

    @media screen and (max-width: 801px) {
        margin-left: 548px;
    }

    @media screen and (max-width: 781px) {
        margin-left: 528px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    

    &:active {
        margin-top:-15px;
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 1115px;
    margin-top: -65px;


    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: #010606;
    }
`;
