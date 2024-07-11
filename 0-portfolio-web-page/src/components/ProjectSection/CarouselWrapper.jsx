import React from 'react'
import './CarouselWrapper.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from '../Projects/ProjectCard';

const CarouselWrapper = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 1920, min: 1040 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1040, min: 768 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 768, min: 375 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 375, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Carousel responsive={responsive} showDots={true} infinite={true} draggable={true} swipeable={true} >
                <ProjectCard
                    imageClass={'first'}
                    title={'Porsche Configurator'}
                    description={'This project is a car configurator featuring several selections, an image slider that dynamically changes colors based on the color selection, and calculates the total amount in euros (€) based on the configurator selections. Additionally, it transfers to the order page after clicking the "Order" button.'}
                    techStack={'HTML, CSS and JavaScript'}
                    livePreviewLink={'https://preeminent-centaur-a5d51a.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/portfolio-projects/tree/main/1-porsche%20configurator'} />
                <ProjectCard
                    imageClass={'fifth'}
                    title={'Random Activity Generator'}
                    description={'This project is a random activity generator. Activities are being randomly generated from db.json file, fetching required data. It is fully responsive based on browser size. There is a checkbox for filtering accessible activities, which allows to load only accessible activities. Generate new activity button loads new random activity. Each activity has its own color styling and image based on their category.'}
                    techStack={'React, TypeScript and SCSS'}
                    livePreviewLink={'https://zippy-selkie-ac1252.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/Portfolio-projects/tree/main/4-random-activity-generator'} />
                <ProjectCard
                    imageClass={'third'}
                    title={'React Online Shop'}
                    description={'This project is a succinct demonstration of an online shopping platform, developed utilizing React and minimal CSS styling. Its primary objective is to highlight various functionalities including an interactive "Create New Item" button that prompts input fields for item addition, a filter input field enabling users to narrow down displayed items based on specified criteria, a sorting feature allowing the arrangement of items according to user preferences, and a delete button for item removal. Prior to deletion, a confirmation dialog seeks user validation for the action.'}
                    techStack={'React and CSS'}
                    livePreviewLink={'https://illustrious-axolotl-b964b4.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/portfolio-projects/tree/main/3-react-online-shop'} />
                <ProjectCard
                    imageClass={'second'}
                    title={'Random Number guesser'}
                    description={'This project is a random number guessing game. Upon loading the page, a random number between 1 and 100 is generated. After entering a guessed number into the input field, a response is given indicating whether to guess a higher number, a lower number, or a congratulatory message for guessing the correct number! Upon guessing the correct number, a modal is displayed showing how many attempts it took to guess the number correctly and the number itself. For testing convenience, upon loading the page, the correct randomly generated number is displayed in the console.'}
                    techStack={'HTML, CSS and JavaScript'}
                    livePreviewLink={'https://peaceful-chimera-5ddf99.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/portfolio-projects/tree/main/2-random%20number%20guesser'} />
                <ProjectCard
                    imageClass={'fourth'}
                    title={'React Portfolio Page'}
                    description={'This is a React portfolio website project that You are currently in. This website serves as my portfolio and it is to showcase my skills and projects. It is fully responsive for all screen sizes, built with simple React and CSS styling'}
                    techStack={'React and CSS'}
                    livePreviewLink={'https://dynamic-douhua-5422e9.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/Portfolio-projects/tree/main/0-portfolio-web-page'} />
            </Carousel>
        </div>
    )
}

export default CarouselWrapper