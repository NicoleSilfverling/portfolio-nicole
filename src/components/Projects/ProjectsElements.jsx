import styled from 'styled-components' 
import {FaHammer} from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'

export const ProjectsContainer = styled.div`
    display: flex;
    height: 1200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--darkBg);
    padding: 0;
    margin: 0;

    @media screen and (max-width:1300px){
        height: 1400px;
    }

    @media screen and (max-width: 680px){
        height: 2600px;
    }
  
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 40px;
    padding: 0 50px;

    @media screen and (max-width: 1300px){
        grid-template-columns: 1fr;
        padding: 0;
    }


`
export const ProjectsCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 600px;
    background: var(--lightBg);
    border-radius: 5px;

    @media screen and (max-width: 680px){
        flex-direction: column;
    }
`

export const ProjectsCard = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;
    height: 390px;
    width: 250px;
    padding: 30px;


`

export const ProjectsIcon = styled.img`
    height: 390px;
    width: auto;
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: var(--lightText);
    margin-bottom: 64px;

    @media screen and(max-width:480px){
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--darkText);
`

export const ProjectsP = styled.p`
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: left;
    color: var(--darkText);
    margin-bottom: 1rem;

`

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 1.5rem;
    position: absolute;
    bottom: 1.5rem;
`

export const LinkBtn = styled(ExternalLink)`
    width: 90px;
    height: 40px;
    border: 3px solid var(--colorTitle);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--colorTitle);
    background-color: transparent;
    
    display: flex;
    justify-content: center;
    align-items: center;
    


    &:hover{
        background-color: var(--colorTitle);
        color: var(--lightText);
    }
`


export const ProjectsTag = styled.div`
    background-color: #e1e2e3;
    color: #333;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Hammer = styled(FaHammer)`
    color: var(--darkText);
    margin-right: 10px;
`