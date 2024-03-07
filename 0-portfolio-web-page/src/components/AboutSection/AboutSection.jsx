import './AboutSection.css';

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" height="50" width="50">
            <path fill="#78c7e9" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/simonas-danielius-75582a229/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" height="50" width="50">
            <g clip-path="url(#clip0_10_208)">
              <path fill="#78c7e9" d="M15 0.600098C7.04701 0.600098 0.600006 7.0471 0.600006 15.0001C0.600006 22.9531 7.04701 29.4001 15 29.4001C22.953 29.4001 29.4 22.9531 29.4 15.0001C29.4 7.0471 22.953 0.600098 15 0.600098ZM11.475 20.9686H8.55901V11.5846H11.475V20.9686ZM9.99901 10.4326C9.07801 10.4326 8.48251 9.7801 8.48251 8.9731C8.48251 8.1496 9.09601 7.5166 10.0365 7.5166C10.977 7.5166 11.553 8.1496 11.571 8.9731C11.571 9.7801 10.977 10.4326 9.99901 10.4326ZM22.125 20.9686H19.209V15.7681C19.209 14.5576 18.786 13.7356 17.7315 13.7356C16.926 13.7356 16.4475 14.2921 16.236 14.8276C16.158 15.0181 16.1385 15.2881 16.1385 15.5566V20.9671H13.221V14.5771C13.221 13.4056 13.1835 12.4261 13.1445 11.5831H15.678L15.8115 12.8866H15.87C16.254 12.2746 17.1945 11.3716 18.768 11.3716C20.6865 11.3716 22.125 12.6571 22.125 15.4201V20.9686Z"></path>
            </g>
            <defs>
              <clipPath id="clip0_10_208">
                <rect fill="white" height="50" width="50"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://www.facebook.com/simonas.danielius" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 235 235">
            <g transform="">
              <g fill="#78c7e9" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                <g transform="scale(10.66667,10.66667)">
                  <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://www.instagram.com/simasda/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 108 108">
            <g transform="">
              <g fill="#78c7e9" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                <g transform="scale(5)">
                  <path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default AboutSection