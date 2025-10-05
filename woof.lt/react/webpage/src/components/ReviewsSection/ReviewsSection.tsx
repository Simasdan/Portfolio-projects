import { useState } from 'react';
import Button, { ButtonAppearance, ButtonPadding } from '../Button/Button';
import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewSectionCarousel from './ReviewSectionCarousel';
import styles from './reviewsSection.module.scss';
import ReviewModal from '../ReviewModal/ReviewModal';
import FirstReviewImg from '../../assets/images/ReviewImage.png';
import SecondReviewImg from '../../assets/images/ReviewImage1.png';

const ReviewsSection = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={styles.reviewsSectionWrapper}>
        <article className={styles.reviewsSectionCardWrapper}>
          <ReviewCard image={FirstReviewImg} name='Vykintė Milerienė' text='„Woof programėlė yra nereali! Anksčiau sugaišdavau labai daug laiko ieškodama patikimų šunų kirpėjų, o dabar viskas vienoje vietoje. Labai patogu :)”' />
          <ReviewCard image={SecondReviewImg} name='Miglė Dvilevičiūtė' text='Ši programėlė yra išsigelbėjimas! Viskas vienoje vietoje, viskas konkretu ir aišku! 100% rekomenduoju!' />
        </article>

        <article className={styles.reviewsSectionCarousel}>
          <ReviewSectionCarousel setActiveIndex={setActiveIndex} />
          <div className={styles.carouselIndicatorWrapper}>
            {[0, 1].map((index) => (
              <div
                key={index}
                className={`${styles.carouselIndicator} ${activeIndex === index ? styles.active : ''}`}
              />
            ))}
          </div>
        </article>

        <div className={styles.reviewsSectionButtonWrapper}>
          <Button
            appearance={ButtonAppearance.ORANGE}
            padding={ButtonPadding.LARGE}
            text='Palikti atsiliepimą'
            onClick={openModal}
            trackingEvent="leave_review_button_click"
          />
        </div>
      </section>

      {isModalOpen && <ReviewModal closeModal={closeModal} />}
    </>
  )
}

export default ReviewsSection