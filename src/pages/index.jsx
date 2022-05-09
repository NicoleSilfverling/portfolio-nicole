import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <>
    {/* <Navbar toggle={toggle}/> */}
    <HeroSection/>
    <About/>
    </>
  )
}

export default Home