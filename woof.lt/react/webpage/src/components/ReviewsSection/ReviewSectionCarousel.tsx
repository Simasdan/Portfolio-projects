import styles from './reviewsSection.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import FirstReviewImg from '../../assets/images/ReviewImage.png';
import SecondReviewImg from '../../assets/images/ReviewImage1.png';

interface ReviewSectionCarouselProps {
    setActiveIndex: (index: number) => void;
}

const ReviewSectionCarousel = ({setActiveIndex}: ReviewSectionCarouselProps) => {

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
            breakpoint: { max: 1024, min: 430 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 430, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        const carouselList = document.querySelector('.react-multi-carousel-list') as HTMLElement;
        if (carouselList) {
            carouselList.style.borderRadius = '2.5rem';
            carouselList.style.overflow = 'hidden';
        }
    }, []);

    return (
        <>
            <Carousel 
            responsive={responsive} 
            arrows={false}
            afterChange={(currentSlide: number) => {
                setActiveIndex(currentSlide === 0 ? 1 : 0)
            }}
            showDots={false}
            >
                <article className={styles.reviewsLeftSideWrapper}>
                    <ReviewCard image={FirstReviewImg} name='Vykintė Milerienė' text='„Woof programėlė yra nereali! Anksčiau sugaišdavau labai daug laiko ieškodama patikimų šunų kirpėjų, o dabar viskas vienoje vietoje. Labai patogu :)”' />
                </article>
                <article className={styles.reviewsRightSideWrapper}>
                    <ReviewCard image={SecondReviewImg} name='Miglė Dvilevičiūtė' text='Ši programėlė yra išsigelbėjimas! Viskas vienoje vietoje, viskas konkretu ir aišku! 100% rekomenduoju!' />
                </article>
            </Carousel>
        </>
    )
}

export default ReviewSectionCarousel