import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'


import {
    ProjectsContainer, 
    ProjectsWrapper,
    ProjectsCard,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    ProjectsTag,
    ProjectsTagBox,
    ProjectsIcon,
    VideoBg
} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projekt</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>Portfolio</ProjectsH2>
                <ProjectsP>Portfolio hemsida</ProjectsP>
                <ProjectsTagBox>
                    <ProjectsTag>JavaScript</ProjectsTag>
                    <ProjectsTag>React</ProjectsTag>
                <ProjectsTag> CSS</ProjectsTag>
                </ProjectsTagBox>
            </ProjectsCard>
            <ProjectsCard>
            <ProjectsIcon src={Icon2}/>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mov'/> */}
                <ProjectsH2> Breakout kopia</ProjectsH2>
                <ProjectsP>Läs mer</ProjectsP>
                <ProjectsTagBox>
                    <ProjectsTag>JavaScript</ProjectsTag>
                    <ProjectsTag>HTML</ProjectsTag>
                <ProjectsTag> CSS</ProjectsTag>
                </ProjectsTagBox>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>Unify</ProjectsH2>
                <ProjectsTagBox>
                    <ProjectsTag>React</ProjectsTag>
                    <ProjectsTag>JavaScript</ProjectsTag>
                    <ProjectsTag> Next.js</ProjectsTag>
                </ProjectsTagBox>
                <ProjectsTagBox>
                <ProjectsTag> Agile</ProjectsTag>
                    <ProjectsTag> Firebase</ProjectsTag>
                </ProjectsTagBox>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects