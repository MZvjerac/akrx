import image1 from '../../images/svg3.svg';
import image2 from '../../images/svg-1.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc:true,
    topLine: 'ABOUT US',
    headline: 'Find out something more about our team',
    description: 'We are the team dedicated to collecting and analyzing information broadcasted from aircraft.',
    buttonLabel: 'Home',
    imgStart: false,
    img: image1,
    alt: 'Team',
    dark: false,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc:true,
    topLine: 'CONTACT US',
    headline: 'Please do not hesitate to contact us',
    description: 'If you are interested in for 100% sure and secure aircraft information, or have any additional question, please contact us:',
    emails1: 'djordje@ak-rx.com',
    emails2: 'boban@ak-rx.com',
    emails3: 'srdjan@ak-rx.com',
    buttonLabel: 'Home',
    imgStart: true,
    img: image2,
    alt: 'Contact',
    dark: false,
    primary: true,
    darkText: true
};