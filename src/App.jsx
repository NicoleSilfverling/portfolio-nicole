import { useState } from 'react'
import './App.css'
import About from './components/About'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
// import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
