import React, {useState} from 'react'
//import Video2 from '../../videos/video.mp4';
//import Video from '../../videos/video2.mp4';
import Video from '../../videos/video3.mp4';
import Video2 from '../../videos/video4.mp4';
// import Video5 from '../../videos/video5.gif';
import Video6 from '../../videos/video6.mp4';
import { HeroContainer, HeroBg, VideoBg, VideoBg2, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    
    const[hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                <VideoBg2 autoPlay loop muted src={Video6} type='video/mp4' />                
                {/* <VideoBg autoPlay loop muted src={Video5} type='video/gif' />  */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Access To Aircraft Data </HeroH1>
                <HeroP>
                    If you want to improve the maintenance of your aircraft,
                    or gain insight into real price of used parts we can offer
                    you safe data which can help you in that task.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='true' 
                        dark='true'
                        smooth={true} duration={550} spy={true} exact='true' offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;



//https://www.youtube.com/watch?v=Nl54MJDR2p8

// Deploy na Heroku
// https://betterprogramming.pub/how-to-deploy-your-react-app-to-heroku-aedc28b218ae