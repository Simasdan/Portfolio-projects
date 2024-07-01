import './AboutSection.css';
import GithubSmallLogo from '../../assets/githubsmall.svg?react';
import LinkedInLogo from '../../assets/linkedinsmall.svg?react';

const AboutSection = () => {

  return (
    <div className='about-section'>
      <div className="about-section-h1">
        <h1 className='h1-flow'>Simonas Danielius</h1>
        <h1 className='developer'>
          <span style={{'--i': 1}}>D</span>
          <span style={{'--i': 2}}>E</span>
          <span style={{'--i': 3}}>V</span>
          <span style={{'--i': 4}}>E</span>
          <span style={{'--i': 5}}>L</span>
          <span style={{'--i': 6}}>O</span>
          <span style={{'--i': 7}}>P</span>
          <span style={{'--i': 8}}>E</span>
          <span style={{'--i': 9}}>R</span>
          <span style={{'--i': 10}}>.</span>
          </h1>
      </div>
      <div className="about-section-socials">
        <a href="https://github.com/Simasdan/portfolio-projects" target="_blank">
          <GithubSmallLogo/>
        </a>
        <a href="https://www.linkedin.com/in/simonas-danielius-75582a229/" target="_blank">
          <LinkedInLogo/>
        </a>
      </div>
    </div>
  )
}

export default AboutSection