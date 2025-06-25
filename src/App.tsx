import React from 'react'
import Hero from './components/Hero'
import Advantage from './components/Advantage'
import Services from './components/Services'
import Calculator from './components/Calculator'
import Expertise from './components/Expertise'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ClientsSlider from './components/ClientsSlider'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />
        <Advantage />
        <Services />
        <Calculator />
        <Expertise />
        <ClientsSlider />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 