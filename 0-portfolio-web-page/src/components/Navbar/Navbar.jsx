import { FaBars } from 'react-icons/fa'
import './Navbar.css';

const Navbar = (props) => {
    
    let refsFromParent = props.allRefs;

    const toggleMeniu = () => {
        props.setIsOpen((open) => !open)
    }

    const navLinkHandler = (ref) => {
        props.infoToParent(ref)
        props.setIsOpen(false)
    }
    
    return (
        <nav className={`navigation-bar ${props.isOpen ? 'open' : ''}`}>
          <button className='h1 h1-flow'><h1>Simdan</h1></button>
          <button className='navbar-burger' onClick={toggleMeniu}>
            <FaBars />
          </button>
          <ul className={`navigation-bar-content ${props.isOpen ? 'is-open' : ''}`}>
            <li><button onClick={() => navLinkHandler(refsFromParent.aboutSectionRef)}>Home</button></li>
            <li><button onClick={() => navLinkHandler(refsFromParent.introSectionRef)}>About</button></li>
            <li><button onClick={() => navLinkHandler(refsFromParent.secondSectionRef)}>Tech Stack</button></li>
            <li><button onClick={() => navLinkHandler(refsFromParent.projectSectionRef)}>Projects</button></li>
            <li><button onClick={() => navLinkHandler(refsFromParent.contactSectionRef)}>Contact</button></li>
          </ul>
        </nav>
    )
}

export default Navbar