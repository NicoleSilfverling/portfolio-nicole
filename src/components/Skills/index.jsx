import React from 'react'
import Svg from '../../images/svg-1.svg'
import {    
    SkillsContainer,
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
    SkillTagWrapper,
    SkillTag
    
} from './SkillsElements'

const Skills = () => {

  return (
    <>
    <SkillsContainer id="skills">
        <InfoWrapper>
            <InfoRow>
                <Coloumn1>
                    <TextWrapper>
                        <TopLine>Kompetenser</TopLine>
                        <Heading>Grundläggande kompetenser</Heading>
                        <Description>
                            Efter två terminer så har jag grundläggande förståelse inom följande:
                        </Description>
                        <SkillTagWrapper>
                            <SkillTag>Java</SkillTag>
                            <SkillTag>JavaScript</SkillTag>
                            <SkillTag>React</SkillTag>
                            <SkillTag>HTML</SkillTag>
                            <SkillTag>CSS</SkillTag>
                            <SkillTag>SQL</SkillTag>
                            <SkillTag>TDD</SkillTag>
                            <SkillTag>Agile</SkillTag>
                        </SkillTagWrapper>
                    </TextWrapper>
                </Coloumn1>
                <Coloumn2>
                    <ImgWrap>
                     <Img src={Svg}/>
                    </ImgWrap>
                </Coloumn2>
            </InfoRow>
        </InfoWrapper>
    </SkillsContainer>
    </>
  )
}

export default Skills