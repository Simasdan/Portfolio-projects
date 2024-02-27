import FirstProject from '../Projects/FirstProject';
import CarouselWrapper from '../ProjectSection/CarouselWrapper'
import './ProjectSection.css';

const ProjectSection = () => {
    return (
        <div className='project-section'>
            <h2 className='project-section-title'>My Projects</h2>
            <p className='project-section-subtitle'>Showcasing my projects that I have built so far</p>
            <CarouselWrapper />
        </div>
    )
}

export default ProjectSection