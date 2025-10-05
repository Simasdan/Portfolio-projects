import styles from './findSpecialistSection.module.scss';
import { useState } from 'react';
import FindSpecialistImg from '../../assets/images/FindSpecialistImage.png';
import WoofLogoSmall from '../../assets/icons/woofLogoSmall.svg?react';
import Button, { ButtonAppearance, ButtonPadding } from '../Button/Button';
import MainModal from '../MainModal/MainModal';

const FindSpecialistSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles.findSpecialistSectionWrapper}>
        <article className={styles.findSpecialistSectionTextWrapper}>
          <h4>Woof.lt - <span>tai patikima pagalba</span> ieškant geriausių augintinio priežiūros specialistų.</h4>
          <menu className={styles.stepsMenu}>
            <li><WoofLogoSmall /><span>Atsisiųskite mobiliąją programėlę</span></li>
            <li><WoofLogoSmall /><span>Rinkitės iš geriausiai įvertintų vietinių augintinių priežiūros paslaugų teikėjų</span></li>
            <li><WoofLogoSmall /><span>Lengvai rezervuokite paslaugas</span></li>
            <li><WoofLogoSmall /><span>Gaukite realaus laiko atnaujinimus</span></li>
          </menu>
          <Button appearance={ButtonAppearance.ORANGE} padding={ButtonPadding.LARGE} text='Ieškoti geriausio specialisto' onClick={openModal} trackingEvent="find_best_specialist_button_click"/>
        </article>
        <figure>
          <img src={FindSpecialistImg} alt="Happy dog = Happy owner" loading='lazy'/>
        </figure>
      </section>

      {isModalOpen && <MainModal closeModal={closeModal} />}
    </>
  )
}

export default FindSpecialistSection