import styled from 'styled-components'
import {FaGithub, FaEnvelope, FaPhone} from 'react-icons/fa'


export const ContactContainer = styled.div`
    color: #fff;
    background: var(--lightBg);

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
    
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width:768px){
        /* grid-template-areas: 'col1 col1' 'col2 col2'; */
        grid-template-areas: 'col1' 'col2';
    }
`

export const Coloumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 100px;
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
    width: 100%;
    /* max-width: 100px; */
    object-fit: contain;
    /* -o-object-fit: contain; */
    

`


export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`


export const ContactInfoWrapper = styled.div`
    display: flex;
    margin: 10px 0;
    
`

export const ContactP = styled.p`
    color: #010606;
    padding-left: 10px;
   
`

export const GithubIcon = styled(FaGithub)`
    color: #333;
`
export const MailIcon = styled(FaEnvelope)`
    color: #333;
`
export const PhoneIcon = styled(FaPhone)`
    color: #333;
`

