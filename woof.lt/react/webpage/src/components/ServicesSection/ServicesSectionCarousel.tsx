import styles from './servicesSection.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LeftButton from '../../assets/icons/leftChivronIcon.svg?react';
import RightButton from '../../assets/icons/rightChivronIcon.svg?react';
import { useEffect, useState } from 'react';
import MainModal from '../MainModal/MainModal';

const ServicesSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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

    const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => (
        <button className={styles.customLeftArrow} onClick={onClick} aria-label='Eiti į kairę'>
            <LeftButton />
        </button>
    );

    const CustomRightArrow = ({ onClick }: { onClick: () => void }) => (
        <button className={styles.customRightArrow} onClick={onClick} aria-label='Eiti į dešinę'>
            <RightButton />
        </button>
    );

    const handleLeftArrowClick = () => {
        activeIndex > 0 && setActiveIndex(activeIndex - 1)
    };

    const handleRightArrowClick = () => {
        activeIndex < 1 && setActiveIndex(activeIndex + 1);
    };

    // GA4 coding
    const handleButtonClick = (platform: string) => {
        if (window.gtag) {
            window.gtag("event", "reach_out_for_saloons", {
                event_category: "Button",
                event_label: platform,
            });
        }
        openModal();
    };
    // GA4 coding

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
                customLeftArrow={<CustomLeftArrow onClick={handleLeftArrowClick} />}
                customRightArrow={<CustomRightArrow onClick={handleRightArrowClick} />}
            >
                <article className={styles.servicesLeftSideWrapper}>
                    <h2>30+</h2>
                    <h3>Raskite paslaugas <span>30+</span> salonų Lietuvoje</h3>
                    <p>Mes augame ir mūsų partnerių skaičius sparčiai kyla! Norite pamatyti savo mėgstamą saloną woof.lt platformoje?</p>
                    <button onClick={() => handleButtonClick('30+ salonų susisiekite mygtukas')} aria-label="Susisiekite su mumis dėl 30+ salonų">Susisiekite.</button>
                    <div className={styles.carouselIndicatorWrapper}>
                        <div
                            className={`${styles.carouselIndicator} ${activeIndex === 0 ? styles.active : ''}`}
                        />
                        <div
                            className={`${styles.carouselIndicator} ${activeIndex === 1 ? styles.active : ''}`}
                        />
                    </div>
                </article>
                <article className={styles.servicesRightSideWrapper}>
                    <h3>Teikiamos paslaugos</h3>
                    <menu>
                        <ul className={styles.leftSideLi}>
                            <li>Nukailinimas</li>
                            <li>Parodinis paruošimas</li>
                            <li>Kirpimas</li>
                            <li>Higiena</li>
                            <li>Iššukavimas</li>
                        </ul>
                        <ul className={styles.rightSideLi}>
                            <li>Dantų higiena</li>
                            <li>Nagų kirpimas</li>
                            <li>Ausų valymas</li>
                            <li>SPA paslaugos</li>
                        </ul>
                    </menu>
                    <div className={styles.carouselIndicatorWrapper}>
                        <div
                            className={`${styles.carouselIndicator} ${activeIndex === 1 ? styles.active : ''}`}
                        />
                        <div
                            className={`${styles.carouselIndicator} ${activeIndex === 0 ? styles.active : ''}`}
                        />
                    </div>
                </article>
            </Carousel>

            {isModalOpen && <MainModal closeModal={closeModal} />}
        </>
    )
}

export default ServicesSectionCarousel