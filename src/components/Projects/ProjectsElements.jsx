import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    display: flex;
    height: 800px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--darkBg);

    @media screen and (max-width:1200px){
        height: 1100px;
    }
    @media screen and (max-width:768px){
        height: 1500px;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 30px;
    padding: 0 50px;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 380px;
    width: 320px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and(max-width:480px){
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`
export const ProjectsTagBox = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
    align-items: center;
    margin-top: 8px;
    position: relative;
    bottom: -4rem;

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

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const VideoBg = styled.video`
    width: auto;
    height: 160px;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`