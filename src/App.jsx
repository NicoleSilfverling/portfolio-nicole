import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
