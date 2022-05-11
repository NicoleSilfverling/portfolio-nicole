import styled from 'styled-components'
import {FaGithub, FaEnvelope, FaPhone, FaLinkedin} from 'react-icons/fa'
import PatternBg from '../../images/subtle-prism.svg'
import { ExternalLink } from 'react-external-link'


export const ContactContainer = styled.div`
    background-color: var(--lightBg);
    background-image: url(${PatternBg});
    /* background by SVGBackgrounds.com */
    background-size: cover;
    

    @media screen and (max-width:768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    @media screen and (max-width: 768px) {
        height: 600px;
    }

    @media screen and (max-width: 440px) {
        height: 450px;
    }
    
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width:768px){
        grid-template-areas: 'col1' 'col2';
    }
`

export const Coloumn1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
`
export const Coloumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 20px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: var(--colorTitle);
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 500;
    color: var(--darkText);;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: var(--darkText);
`
export const ImgWrap = styled.div`
    max-width: 400px;

`


export const Img = styled.img`
    width: 100%;
    height: 100%;
`


export const ContactInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 17px 0;
    max-width: fit-content;

`

export const StyledLink = styled(ExternalLink)`
    color: var(--darkText);
    font-size: 1.3rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }
`

export const ContactP = styled.p`
    color: var(--darkText);
    font-size: 1.3rem;
    margin-left: 15px;

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }
`


export const GithubIcon = styled(FaGithub)`
    color: #333;
    font-size: 1.7rem;
    margin-right: 10px;

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }
`
export const MailIcon = styled(FaEnvelope)`
    color: #333;
    font-size: 1.4rem;

    @media screen and (max-width: 400px) {
        font-size: 1.2rem;
    }
`
export const PhoneIcon = styled(FaPhone)`
    color: #333;
    font-size: 1.4rem;

    @media screen and (max-width: 400px) {
        font-size: 1.2rem;
    }
`
export const LinkedInIcon = styled(FaLinkedin)`
    color: #333;
    font-size: 1.7rem;
    margin-right: 10px;

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }
`


