import styles from './servicesSection.module.scss';
import { useState } from 'react';
import ServicesSectionCarousel from './ServicesSectionCarousel';
import MainModal from '../MainModal/MainModal';

const ServicesSection = () => {
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
      window.gtag("event", "reach_out_for_saloons", {
        event_category: "Button",
        event_label: platform,
      });
    }
    openModal();
  };
  // GA4 coding

  return (
    <>
      <section className={styles.servisesSectionWrapper}>
        <article className={styles.servicesLeftSideWrapper}>
          <h3>Daugiau nei <span>30+ salonų</span> visoje Lietuvoje</h3>
          <p>Mes augame ir mūsų partnerių skaičius sparčiai kyla! Norite pamatyti savo mėgstamą saloną woof.lt platformoje?</p>
          <button onClick={() => handleButtonClick('30+ salonų susisiekite mygtukas')}>Susisiekite.</button>
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
        </article>
      </section>
      <section className={styles.servicesSectionCarousel}>
        <ServicesSectionCarousel />
      </section>

      {isModalOpen && <MainModal closeModal={closeModal} />}
    </>
  )
}

export default ServicesSection