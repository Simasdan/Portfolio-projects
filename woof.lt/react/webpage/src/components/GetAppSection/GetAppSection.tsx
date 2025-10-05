import styles from './getAppSection.module.scss';
import { useState } from 'react';
import GetAppImage from '../../assets/images/GetAppImage.png';
import Button, { ButtonAppearance, ButtonPadding } from '../Button/Button';
import MainModal from '../MainModal/MainModal';

const GetAppSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles.getAppSectionWrapper}>
        <article className={styles.cardWrapper}>
          <figure>
            <img src={GetAppImage} alt="Phone Notification" loading='lazy'/>
          </figure>
          <article className={styles.getAppSectionTextWrapper}>
            <h5>Atsisiųskite Woof programėlę ir mėgaukitės ramybe žinodami, kad jūsų augintinis yra <span>kruopščiose</span> ir <span>mylinčiose</span> rankose!</h5>
            <Button appearance={ButtonAppearance.ORANGE} padding={ButtonPadding.LARGE} text='Atsisiųsti mobiliąją programėlę' onClick={openModal} trackingEvent="download_mobile_app_button_click"/>
          </article>
        </article>
      </section>

      {isModalOpen && <MainModal closeModal={closeModal} />}
    </>
  )
}

export default GetAppSection