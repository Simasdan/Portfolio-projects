import styles from './aboutUsPage.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LeftButton from '../../assets/icons/leftChivronIcon.svg?react';
import RightButton from '../../assets/icons/rightChivronIcon.svg?react';
import { useState, useEffect } from 'react';
import MainModal from '../../components/MainModal/MainModal';

const AboutUsPageCarousel = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // GA4 coding
    const handleButtonClick = (platform: string) => {
        if (window.gtag) {
            window.gtag("event", "about_us_page_cards_button", {
                event_category: "Button",
                event_label: platform,
            });
        }
        openModal();
    };
    // GA4 coding

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
        <button className={styles.customLeftArrow} onClick={onClick}>
            <LeftButton />
        </button>
    );

    const CustomRightArrow = ({ onClick }: { onClick: () => void }) => (
        <button className={styles.customRightArrow} onClick={onClick}>
            <RightButton />
        </button>
    );

    useEffect(() => {
        const carouselList = document.querySelector('.react-multi-carousel-list') as HTMLElement;
        if (carouselList) {
            carouselList.style.borderRadius = '2.5rem';
            carouselList.style.overflow = 'hidden';
        }
    }, []);

    return (
        <>
            <Carousel responsive={responsive}
                customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
                customRightArrow={<CustomRightArrow onClick={() => { }} />}>
                <article className={styles.aboutUsMediaCard}>
                    <div className={styles.cardTextAndButtonWrapper}>
                        <h3>Žiniasklaida</h3>
                        <p>Supažindink savo skaitytojus su Woof.lt! Susisiek el. paštu <span>labas@woof.lt</span> ir gauk daugiau informacijos.</p>
                    </div>
                    <button className={styles.reachOutButton} onClick={() => handleButtonClick('Apie mus žiniasklaidos susisiekimo mygtukas')}>Susisiekite.</button>
                </article>
                <article className={styles.aboutUsAdCard}>
                    <div className={styles.cardTextAndButtonWrapper}>
                        <h3>Reklama</h3>
                        <p>Mes visada esame atviri bendradarbiauti. Turi šaunią idėją? Mes norime ją išgirsti. Parašyk mums <span>labas@woof.lt</span> ir aptarkime bendradarbiavimo galimybes.</p>
                    </div>
                    <button className={styles.reachOutButton} onClick={() => handleButtonClick('Apie mus reklamos susisiekimo mygtukas')}>Susisiekite.</button>
                </article>
            </Carousel>
            {isModalOpen && <MainModal closeModal={closeModal} />}
        </>
    )
}

export default AboutUsPageCarousel