import styled from 'styled-components'
import PatternBg from '../../images/subtle-prism.svg'


export const SkillsContainer = styled.div`
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
        height: 700px;
    }

    @media screen and (max-width: 440px) {
        height: 750px;
    }

`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width:768px){
        grid-template-areas: 'col1' 'col2';
    }
`

export const Coloumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Coloumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    display: flex;
    justify-content: baseline;
    align-items: center;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const SkillTagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1.1rem;
    flex-wrap: wrap;
    width: 80%;
`

export const SkillTag = styled.div`
    background-color: #e1e2e3;
    color: #222;
    border-radius: 5px;
    padding:10px 15px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
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
    margin-bottom: 25px;
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


