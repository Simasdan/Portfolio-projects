import React, { useState } from 'react'
import { FaBars} from 'react-icons/fa'
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMeniu = () => {
        setIsOpen((open) => !open)
    }

    return (
        <div className={`navigation-bar ${isOpen ? 'open' : ''}`}>
            <button className='h1 h1-flow'><h1>Simdan</h1></button>
            <button className='navbar-burger' onClick={toggleMeniu}>
                <FaBars />
            </button>
            <ul className={`navigation-bar-content ${isOpen ? 'is-open' : ''}`}>
                <button><li>Home</li></button>
                <button><li>About</li></button>
                <button><li>Tech Stack</li></button>
                <button><li>Projects</li></button>
                <button><li>Contact</li></button>
            </ul>
            
        </div>
    )
}

export default Navbar