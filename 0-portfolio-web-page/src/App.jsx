import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import Navbar from './components/Navbar/Navbar'
import SecondSection from './components/SecondSection/SecondSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import IntroSection from './components/IntroSection/IntroSection'
import React, { useState, useRef } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const allRefs = {
    aboutSectionRef: useRef(),
    introSectionRef: useRef(),
    secondSectionRef: useRef(),
    projectSectionRef: useRef(),
    contactSectionRef: useRef()
  };

  const infoFromChild = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className='container-fluid'>
        <Navbar infoToParent={infoFromChild}
                allRefs={allRefs}
                isOpen={isOpen}
                setIsOpen={setIsOpen} />
        <div className='container'>
          <div ref={allRefs.aboutSectionRef}><AboutSection /></div>
          <div ref={allRefs.introSectionRef}><IntroSection /></div>
          <div ref={allRefs.secondSectionRef}><SecondSection /></div>
          <div ref={allRefs.projectSectionRef}><ProjectSection /></div>
          <div ref={allRefs.contactSectionRef}><Contacts /></div>
          <div className="break"></div>
          <div><Footer /></div>
        </div>
      </div>
    </>
  )
}

export default App