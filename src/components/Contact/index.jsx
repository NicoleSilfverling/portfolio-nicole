import React from 'react'
import Svg from '../../images/svg-2.svg'
import {    
    ContactContainer,
    InfoWrapper,
    InfoRow,
    Coloumn1, 
    Coloumn2, 
    TextWrapper,
    TopLine,
    Heading,
    Description,
    ImgWrap,
    Img,
    ContactP,
    GithubIcon,
    PhoneIcon,
    MailIcon,
    ContactInfoWrapper
    
} from './ContactElements'

const Contact = () => {

  return (
    <>
    <ContactContainer id="contact">
        <InfoWrapper>
            <InfoRow>
                <Coloumn1>
                    <TextWrapper>
                        <TopLine>Kontakt</TopLine>
                        <Heading>Hör av dig!</Heading>
                        <ContactInfoWrapper>
                            <MailIcon/>
                            <ContactP>Nicole.silfverling@gmail.com</ContactP>
                        </ContactInfoWrapper>
                        <ContactInfoWrapper>
                            <PhoneIcon/>
                            <ContactP>073 - 642 07 06</ContactP>
                        </ContactInfoWrapper>
                        <ContactInfoWrapper>
                            <GithubIcon/>
                            <ContactP>Github</ContactP>
                        </ContactInfoWrapper>

                    </TextWrapper>
                </Coloumn1>
                <Coloumn2>
                    <ImgWrap>
                     <Img src={Svg}/>
                    </ImgWrap>
                </Coloumn2>
            </InfoRow>
        </InfoWrapper>
    </ContactContainer>
    </>
  )
}

export default Contact