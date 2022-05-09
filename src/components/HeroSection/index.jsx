import React from 'react'
import Video from '../../videos/video.mp4'
import {
  HeroContainer, 
  HeroBg,
  VideoBg, 
  HeroContent,
  HeroH1, 
  HeroP, 
  Btn, 
  BtnWrapper} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Nicole Silfverling</HeroH1>
            <HeroP>Studerar till Java- och Javascript-utvecklare</HeroP>
            <BtnWrapper>
              <Btn 
                to="about"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}>Mer om mig</Btn>
              <Btn 
              to="projects"
               smooth={true} 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}>Mina projekt</Btn>
            </BtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection