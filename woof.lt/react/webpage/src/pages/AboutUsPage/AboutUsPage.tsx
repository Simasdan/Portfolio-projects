import styles from './aboutUsPage.module.scss';
import { useState } from 'react';
import ContactsImage from '../../assets/images/ContactsImage.png';
import AboutUsPageCarousel from './AboutUsPageCarousel';
import MainModal from '../../components/MainModal/MainModal';

const AboutUsPage = () => {
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

  return (
    <>
      <section className={styles.aboutUsPageWrapper}>
        <article className={styles.aboutUsPageTextWrapper}>
          <h1>Mes tikime, kad kiekvienas šuo nusipelno <span>geriausios</span> priežiūros</h1>
          <h2>Woof - tai platforma, jungianti mylinčius šeimininkus su patikimais ir profesionaliais šunų priežiūros specialistais.</h2>
          <p><b><span>Mūsų tikslas</span> – palengvinti jūsų rūpesčius ir padėti jūsų augintiniui jaustis mylimam ir prižiūrėtam.</b></p>
        </article>
        <figure className={styles.aboutUsPageImageWrapper}>
          <img src={ContactsImage} alt="Happy Family!" loading='lazy'/>
        </figure>
      </section>
      <section className={styles.aboutUsCardsWrapper}>
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
      </section>
      <section className={styles.aboutUsPageCarousel}>
        <AboutUsPageCarousel />
      </section>

      {isModalOpen && <MainModal closeModal={closeModal} />}
    </>
  )
}

export default AboutUsPage