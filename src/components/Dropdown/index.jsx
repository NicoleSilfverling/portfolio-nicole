import React from 'react'
import { 
  DropdownContainer, 
  Icon, 
  CloseIcon, 
  DropdownWrapper, 
  DropdownMenu, 
  DropdownLink 
} from './DropdownElements'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            <DropdownLink to="about" onClick={toggle}>Om mig</DropdownLink>
            <DropdownLink to="skills" onClick={toggle}>Kompetenser</DropdownLink>
            <DropdownLink to="projects" onClick={toggle}>Projekt</DropdownLink>
            <DropdownLink to="contact" onClick={toggle}>Kontakt</DropdownLink>
          </DropdownMenu>
        </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown