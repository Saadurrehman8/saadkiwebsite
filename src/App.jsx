import React from 'react'
import Header from './components/header/header'
import HeroSection from './components/herosections/herosections'
import Features from './components/features/feature'
import AboutMe from './components/aboutme/aboutme'
import TechnicalSkills from './components/technicalskill/skill'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features/>
      <AboutMe />
      <TechnicalSkills />
    </div>
  )
}

export default App