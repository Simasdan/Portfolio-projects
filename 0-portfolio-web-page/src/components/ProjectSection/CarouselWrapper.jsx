import React from 'react'
import './CarouselWrapper.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FirstProject from '../Projects/FirstProject';
import SecondProject from '../Projects/SecondProject';
import ThirdProject from '../Projects/ThirdProject';

const CarouselWrapper = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 1920, min: 1040 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1040, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 375 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 375, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Carousel responsive={responsive} showDots={true} infinite={true} draggable={true} swipeable={true}>
                <SecondProject />
                <FirstProject />
                <ThirdProject />
                <FirstProject />
                <FirstProject />
            </Carousel>
        </div>
    )
}

export default CarouselWrapper