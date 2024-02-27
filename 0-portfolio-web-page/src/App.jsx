import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import Navbar from './components/Navbar/Navbar'
import SecondSection from './components/SecondSection/SecondSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import IntroSection from './components/IntroSection/IntroSection'

function App() {

  return (
    <>
      <div className='container-fluid'>
        <Navbar />
        <div className='container'>
          <AboutSection />
          <IntroSection />
          <SecondSection />
          <ProjectSection />
          <Contacts />
          <div className="break"></div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
