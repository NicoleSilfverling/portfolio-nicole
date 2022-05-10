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
    Img
    
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
                        <Description>
                             Java, Javascript, React, HTML, CSS, SQL, TDD, Agile
                        </Description>
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