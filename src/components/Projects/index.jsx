import React from 'react'
import Icon1 from '../../images/portfolio.png'
import Icon2 from '../../images/breakout.png'
import Icon3 from '../../images/unify.png'

import {
    ProjectsContainer, 
    ProjectsWrapper,
    ProjectsCardWrapper,
    ProjectsCard,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    ProjectsIcon,
    Hammer,
    LinkBtn,
    BtnWrapper
} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projekt</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCardWrapper>
                <ProjectsIcon src={Icon1}/>
                <ProjectsCard>
                    <ProjectsH2>Portfolio</ProjectsH2>
                    <ProjectsP>Portfolio hemsida skapat med react</ProjectsP>
                    <BtnWrapper>
                        <LinkBtn href="https://github.com/NicoleSilfverling/portfolio-nicole">Code</LinkBtn>
                        <LinkBtn href="https://nicoles-portfolio.netlify.app">Site</LinkBtn>
                    </BtnWrapper>
                </ProjectsCard>
            </ProjectsCardWrapper>
            <ProjectsCardWrapper>
                <ProjectsIcon src={Icon2}/>
                <ProjectsCard>
                    <ProjectsH2> Breakout kopia</ProjectsH2>
                    <ProjectsP>Återskapat det klassiska spelet Breakout med Javascript och HTML Canvas.</ProjectsP>
                    <BtnWrapper>
                        <LinkBtn href="https://github.com/NicoleSilfverling/sti-frontend">Code</LinkBtn>
                        <LinkBtn href="https://nicole-frontend.herokuapp.com/">Site</LinkBtn>
                    </BtnWrapper>
                </ProjectsCard>
            </ProjectsCardWrapper>
            <ProjectsCardWrapper>
                <ProjectsIcon src={Icon3}/>
                <ProjectsCard>
                    <ProjectsH2>Unify</ProjectsH2>
                    <ProjectsP>Hemsida för att hjälpa studenter att hitta vänner genom olika event. Samarbete mellan Java och UX-studenter. Byggt med NextJS och använder firebase som databas.</ProjectsP>
                    <ProjectsP><Hammer/>Pågående projekt</ProjectsP>
                    <BtnWrapper>
                        <LinkBtn href="https://github.com/fiamont/unify">Code</LinkBtn>
                        <LinkBtn href="https://unify-sti.vercel.app/">Site</LinkBtn>
                    </BtnWrapper>
                </ProjectsCard>
            </ProjectsCardWrapper>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects