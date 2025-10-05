import styles from './yorkieSection.module.scss';
import { useState } from 'react';
import YorkieImage from '../../assets/images/YorkieImage.png';
import WoofLogoSmall from '../../assets/icons/woofLogoSmall.svg?react';
import Wbg from '../../assets/icons/W.svg?react';
import MainModal from '../MainModal/MainModal';

const YorkieSection = () => {
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
      window.gtag("event", "find_best_specialist_yorkie", {
        event_category: "Button",
        event_label: platform,
      });
    }
    openModal();
  };
  // GA4 coding

  return (
    <>
      <section className={styles.yorkieSectionWrapper}>
        <article className={styles.backgroundCardWrapper}>
          <Wbg className={styles.wBgLogo} />
          <figure>
            <img src={YorkieImage} alt="Doggy Woof Woof" />
          </figure>
          <article className={styles.yorkieSectionTextWrapper}>
            <h5>Neleiskite, kad įtemptas tvarkaraštis pakenktų jūsų <span>augintinio gerovei</span></h5>
            <p>Su Woof lengvai suplanuosite ir užsisakysite visas reikalingas paslaugas</p>
            <menu>
              <li><WoofLogoSmall className={styles.woofLogoSmall} /><span>Padėkite šuniukui jaustis ramiau</span></li>
              <li><WoofLogoSmall className={styles.woofLogoSmall} /><span>Skirkite daugiau laiko žaidimams ir pasivaikščiojimams</span></li>
              <li><WoofLogoSmall className={styles.woofLogoSmall} /><span>Jaukesnė aplinka</span></li>
              <li><WoofLogoSmall className={styles.woofLogoSmall} /><span>Reguliari priežiūra</span></li>
            </menu>
            <button onClick={() => handleButtonClick('Yorkšyro ieškokite geriausio specialisto mygtukas')}>Ieškokite geriausio specialisto</button>
          </article>
        </article>
      </section>

      {isModalOpen && <MainModal closeModal={closeModal} />}
    </>
  )
}

export default YorkieSection