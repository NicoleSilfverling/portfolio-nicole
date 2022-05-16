import React from 'react'
import { useState } from 'react'
import Fotboll from '../../images/TVFotboll.gif'
import Hockey from '../../images/TVHockey.gif'
import {    
    AboutContainer,
    InfoWrapper,
    InfoRow,
    Coloumn1, 
    Coloumn2, 
    TextWrapper,
    TopLine,
    Heading,
    Description,
    ImgWrap,
    Gif
} from './AboutElements'

const About = () => {

    const [state, setState] = useState(false);
    const [gif, setGif] = useState(Fotboll)

    const toggle = () => {
        setState(!state);
        setGif(!state ? Hockey : Fotboll);
    }

  return (
    <>
    <AboutContainer id="about">
        <InfoWrapper>
            <InfoRow>
                <Coloumn1>
                    <TextWrapper>
                        <TopLine>Om mig</TopLine>
                        <Heading>Hej!</Heading>
                        <Description>
                            Jag heter Nicole Silfverling och studerar till Javautvecklare på 
                            Stockholms Tekniska Institut.
                        </Description>
                        <Description>
                            Innan jag började studera arbetade jag med sport TV-produktioner som 
                            fotograf, redigerare och grafik-operatör.
                        </Description>
                        <Description>
                            Efter 7 år i TV-branschen är jag redo för nya utmaningar och ser fram emot att starta min resa som webb-utvecklare.
                        </Description>
                    </TextWrapper>
                </Coloumn1>
                <Coloumn2>
                    <ImgWrap onClick={toggle}>
                     <Gif src={gif}/>
                    </ImgWrap>
                </Coloumn2>
            </InfoRow>
        </InfoWrapper>
    </AboutContainer>
    </>
  )
}

export default About