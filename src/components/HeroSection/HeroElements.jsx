import Link from 'react-scroll/modules/components/Link'
import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    letter-spacing: 0.3rem;


    @media screen and (max-width:768px) {
        font-size: 40px;
    }
    @media screen and (max-width:480px) {
        font-size: 32px;
    }

`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width:768px) {
        font-size: 24px;
    }
    @media screen and (max-width:480px) {
        font-size: 18px;
    }
`

export const BtnWrapper= styled.div`
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Btn = styled(Link)`
    margin-right: 2rem;
    padding: 10px 20px;
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background: var(--colorTitle);
        
    }
`
