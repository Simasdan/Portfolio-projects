import styles from './contactsPage.module.scss';
import { useState } from 'react';
import Button, { ButtonAppearance, ButtonPadding } from '../../components/Button/Button';
import MailLogo from '../../assets/icons/mailLogo.svg?react';
import AboutUsImage from '../../assets/images/AboutUsImage.png';
import MainModal from '../../components/MainModal/MainModal';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMailButtonClick = () => {
    if (window.gtag) {
      window.gtag("event", "mail_button_click", {
        event_category: "Button",
        event_label: "Contact Mail Button",
      });
    }
  };

  return (
    <>
      <section className={styles.contactsPageWrapper}>
        <article className={styles.contactsTextWrapper}>
          <h1><span>Susisiekite</span> su mumis</h1>
          <h2>Mes esame Woof – internetinė augintinių priežiūros paslaugų platforma ir lengviausias būdas jums užsisakyti visas reikalingas paslaugas savo šuniui.</h2>
          <br />
          <br />
          <p><b>Kyla klausimų? Susisiekite nurodytu el. paštu ir mes Jums padėsime!</b></p>
          <div className={styles.contactsButtonWrapper}>
            <Button appearance={ButtonAppearance.ORANGE} padding={ButtonPadding.LARGE} text='Susisiekti' onClick={openModal} trackingEvent="contacts_reach_out_button_click"/>
            <button className={styles.mailButton} onClick={handleMailButtonClick}>
              <MailLogo />
              <a href="mailto:labas@woof.lt" className={styles.email}>labas@woof.lt</a>
            </button>
          </div>
        </article>
        <figure className={styles.contactsPageImage}>
          <img src={AboutUsImage} alt="Guess who's back!" loading='lazy'/>
        </figure>
      </section>

      {isModalOpen && <MainModal closeModal={closeModal} />}
    </>
  )
}

export default ContactsPage