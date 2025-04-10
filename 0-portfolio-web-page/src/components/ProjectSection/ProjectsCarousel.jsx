import './ProjectsCarousel.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LeftButton from '../../assets/icons/leftArrowIcon.svg?react';
import RightButton from '../../assets/icons/rightArrowIcon.svg?react';
import { useEffect } from 'react';
import ProjectCard from '../Projects/ProjectCard';

const ProjectsCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 876 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 876, min: 0 },
            items: 1
        }
    };

    const CustomLeftArrow = ({ onClick }) => (
        <button className='customLeftArrow' onClick={onClick}>
            <LeftButton />
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button className='customRightArrow' onClick={onClick}>
            <RightButton />
        </button>
    );

    useEffect(() => {
        const carouselList = document.querySelector('.react-multi-carousel-list');
        if (carouselList) {
            carouselList.style.borderRadius = '2.5rem';
            carouselList.style.overflow = 'hidden';
        }
    }, []);

    return (
        <>
            <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                draggable={true}
                swipeable={true}
                customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
                customRightArrow={<CustomRightArrow onClick={() => { }} />}
            >

                <ProjectCard
                    imageClass={'sixth'}
                    title={'Lunch App'}
                    description={'This project is a fully responsive lunch application featuring login and registration pages, as well as a meal ordering interface. Data for rendering is sourced from a JSON server. Upon accessing the application, a modal will appear, providing guidance on how to log in for testing purposes and instructions for using the meal ordering layout. Additionally, the application addresses various edge cases, which are explained in detail within the modals. The app was built utilizing best practices for code reusability, ensuring a maintainable and scalable codebase.'}
                    techStack={'React, TypeScript and SCSS'}
                    livePreviewLink={'https://tangerine-brigadeiros-d5c2da.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/Portfolio-projects/tree/main/5-lunch-app'} />
                {/* <ProjectCard
                    imageClass={'seventh'}
                    title={'Universitetas.lt'}
                    description={'This is an online platform providing diverse information on business creation, offering assistance to both beginners and seasoned entrepreneurs! I am part of this project as a front-end developer.'}
                    techStack={'React, TypeScript and SCSS'}
                    livePreviewLink={'https://www.universitetas.lt'}
                    /> */}
                <ProjectCard
                    imageClass={'eight'}
                    title={'Woof.lt'}
                    description={'This is an online dog grooming platform for Lithuania based dog groomers and owners.'}
                    techStack={'React, TypeScript and SCSS'}
                    livePreviewLink={'https://woof.lt/'}
                />
                <ProjectCard
                    imageClass={'fifth'}
                    title={'Activity Generator'}
                    description={'This project is a random activity generator. Activities are being randomly generated from JSON server, fetching required data. It is fully responsive based on browser size. There is a checkbox for filtering accessible activities, which allows to load only accessible activities. Generate new activity button loads new random activity. Each activity has its own color styling and image based on their category.'}
                    techStack={'React, TypeScript and SCSS'}
                    livePreviewLink={'https://zippy-selkie-ac1252.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/Portfolio-projects/tree/main/4-random-activity-generator'} />
                <ProjectCard
                    imageClass={'first'}
                    title={'Porsche Configurator'}
                    description={'This project is a car configurator featuring several selections, an image slider that dynamically changes colors based on the color selection, and calculates the total amount in euros (€) based on the configurator selections. Additionally, it transfers to the order page after clicking the "Order" button.'}
                    techStack={'HTML, CSS and JavaScript'}
                    livePreviewLink={'https://preeminent-centaur-a5d51a.netlify.app/'}
                    codeLink={'https://github.com/Simasdan/portfolio-projects/tree/main/1-porsche%20configurator'} />
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
        </>
    )
}

export default ProjectsCarousel