import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='copyright'>Copyright © 2024 SIMDAN</p>
      <ul className="footer-bar-content">
                <button><li>Home</li></button>
                <button><li>About</li></button>
                <button><li>Tech Stack</li></button>
                <button><li>Projects</li></button>
                <button><li>Contact</li></button>
      </ul>
    </div>
  )
}

export default Footer