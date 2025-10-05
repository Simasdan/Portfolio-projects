import styles from './mainModal.module.scss';
import { useState } from 'react';
// import axios from 'axios';
import CloseIcon from '../../assets/icons/closeIcon.svg?react';
import Button, { ButtonAppearance, ButtonPadding } from '../Button/Button';
import DoggoHappy from '../../assets/images/Wūfembvas 1.png';

interface MainModalProps {
  closeModal: () => void;
}

const MainModal = ({ closeModal }: MainModalProps) => {

  const [step, setStep] = useState<'form' | 'confirmation' | 'thankyou'>('form');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [radioSelection, setRadioSelection] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    setEmailError('');

    if (!email.trim()) {
      setEmailError('Prašome pateikti El. pašto adresą');
      isValid = false;
    }

    if (!isValid) return;

    setStep('confirmation');
  }

  const handleFinalSubmit = async () => {
    if (!radioSelection) {
      alert('Pasirinkite vieną iš variantų.')
    } else {
      // try {
      //   const formData = new URLSearchParams();
      //   formData.append('email', email);
      //   formData.append('type', radioSelection);

      //   await axios.post('https://api.woof.lt/api/v1/subscribe', formData, {
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //     }
      //   });

      //   setStep('thankyou');
      //   setEmail('');
      //   setRadioSelection('');

      // } catch (error) {
      //   alert('Įvyko klaida. Bandykite dar kartą.')
      // }

      setStep('thankyou');
      setEmail('');
      setRadioSelection('');
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={`${styles.reviewModalWrapper} ${step === 'thankyou' ? styles.submitted : ''}`}>
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseIcon />
        </button>
        {step === 'thankyou' ? (
          <div className={styles.thankYouWrapper}>
            <h2>Ačiū, kad prisijungėte prie mūsų!</h2>
            <p>Jūs - <span>Woof.lt</span> šeimos narys! Netrukus gausite naujienas ir pirmieji sužinosite, apie galimybę išbandyti <span>Woof.lt</span>!</p>
            <figure>
              <img src={DoggoHappy} alt="Doggo thanks you!" />
            </figure>
          </div>
        ) : step === 'confirmation' ? (
          <div className={styles.confirmationWrapper}>
            <div className={styles.radioButtons}>
              <label htmlFor="klientas">
                <input
                  id='klientas'
                  type="radio"
                  name="choice"
                  value="klientas"
                  checked={radioSelection === 'klientas'}
                  onChange={(e) => setRadioSelection(e.target.value)}
                />
                Ieškau paslaugų savo augintiniui
              </label>
              <label htmlFor="groomeris">
                <input
                  id='groomeris'
                  type="radio"
                  name="choice"
                  value="groomeris"
                  checked={radioSelection === 'groomeris'}
                  onChange={(e) => setRadioSelection(e.target.value)}
                />
                Teikiu paslaugas augintiniams
              </label>
            </div>
            <Button
              type="button"
              appearance={ButtonAppearance.ORANGE}
              padding={ButtonPadding.LARGE}
              text="Išsaugoti pakeitimus"
              onClick={handleFinalSubmit}
            />
          </div>
        ) : (
          <>
            <h2>Uodegą vizginančios naujienos tiesiai į jūsų pašto dėžutę!</h2>
            <p>Įveskite savo el. paštą ir tapkite <span>Woof.lt</span> bendruomenės dalimi! Gaukite ne tik visas naujienas, bet ir būkite pirmieji, galintys išbandyti naują būdą rasti patikimus specialistus savo augintiniui!</p>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.inputsWrapper}>
                <div className={styles.emailInputWrapper}>
                  <input
                    type="email"
                    placeholder='El. paštas'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <p className={styles.errorText}>{emailError}</p>}
                </div>
              </div>
              <Button type='submit' appearance={ButtonAppearance.ORANGE} padding={ButtonPadding.LARGE} text='Prenumeruoti' />
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default MainModal