import styles from './reviewModal.module.scss';
import { useState } from 'react';
// import axios from 'axios';
import StarIcon from '../../assets/icons/starIcon.svg?react';
import CloseIcon from '../../assets/icons/closeIcon.svg?react';
import Button, { ButtonAppearance, ButtonPadding } from '../Button/Button';
import DoggoHappy from '../../assets/images/Wūfembvas 1.png';

interface ReviewModalProps {
  closeModal: () => void;
}

const ReviewModal = ({ closeModal }: ReviewModalProps) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [step, setStep] = useState<'form' | 'confirmation' | 'thankyou'>('form');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [radioSelection, setRadioSelection] = useState<string>('');

  const handleStarClick = (index: number) => {
    setRating(prev => (prev === index + 1 ? 0 : index + 1))
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;
    setNameError('');
    setEmailError('');

    if (!name.trim()) {
      setNameError('Praome pateikti vardą ir pavardę');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Prašome pateikti El. pašto adresą');
      isValid = false;
    }

    if (!isValid) return;

    setStep('confirmation');
  };

  const handleFinalSubmit = async () => {
    if (!radioSelection) {
      alert('Pasirinkite vieną iš variantų.')
    } else {
      // try {
      //   const formData = new URLSearchParams();
      //   formData.append('name', name);
      //   formData.append('email', email);
      //   formData.append('review', review);
      //   formData.append('rating', rating.toString());
      //   formData.append('type', radioSelection);

      //   await axios.post('https://api.woof.lt/api/v1/subscribe', formData, {
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //     }
      //   });

      //   setStep('thankyou');
      //   setName('');
      //   setEmail('');
      //   setReview('');
      //   setRating(0);
      //   setRadioSelection('');

      // } catch (error) {
      //   alert('Įvyko klaida. Bandykite dar kartą.');
      // }

      setStep('thankyou');
      setName('');
      setEmail('');
      setReview('');
      setRating(0);
      setRadioSelection('');
    }
  }

  return (
    <>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={`${styles.reviewModalWrapper} ${step === 'thankyou' ? styles.submitted : ''}`}>
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseIcon />
        </button>
        {step === 'thankyou' ? (
          <div className={styles.thankYouWrapper}>
            <h2>Ačiū!</h2>
            <p>Jūsų atsiliepimas išsiųstas.</p>
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
            <h2>Parašykite <span>atsiliepimą</span></h2>
            <form onSubmit={handleFormSubmit}>
              <textarea
                placeholder='Jūsų atsiliepimas'
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
              <div className={styles.ratingWrapper}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    onClick={() => handleStarClick(index)}
                    className={index < rating ? styles.filledStar : styles.emptyStar}
                  />
                ))}
              </div>
              <div className={styles.inputsWrapper}>
                <div className={styles.nameInputWrapper}>
                  <input
                    type="text"
                    placeholder='Vardas'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {nameError && <p className={styles.errorText}>{nameError}</p>}
                </div>
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
              <Button type='submit' appearance={ButtonAppearance.ORANGE} padding={ButtonPadding.LARGE} text='Palikti atsiliepimą' />
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default ReviewModal



// import styles from './reviewModal.module.scss';
// import { useState } from 'react';
// import axios from 'axios';
// import StarIcon from '../../assets/icons/starIcon.svg?react';
// import CloseIcon from '../../assets/icons/closeIcon.svg?react';
// import Button, { ButtonAppearance, ButtonPadding } from '../Button/Button';
// import DoggoHappy from '../../assets/images/Wūfembvas 1.png';

// interface ReviewModalProps {
//   closeModal: () => void;
// }

// const ReviewModal = ({ closeModal }: ReviewModalProps) => {

//   const [rating, setRating] = useState<number>(0);
//   const [review, setReview] = useState<string>('');
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [submitted, setSubmitted] = useState<boolean>(false);
//   const [nameError, setNameError] = useState<string>('');
//   const [emailError, setEmailError] = useState<string>('');

//   const handleStarClick = (index: number) => {
//     setRating(prev => (prev === index + 1 ? 0 : index + 1))
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     let isValid = true;
//     setNameError('');
//     setEmailError('');

//     if (!name.trim()) {
//       setNameError('Praome pateikti vardą ir pavardę');
//       isValid = false;
//     }

//     if (!email.trim()) {
//       setEmailError('Prašome pateikti El. pašto adresą');
//       isValid = false;
//     }

//     if (!isValid) return;

//     try {
//       const formData = new URLSearchParams();
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('review', review);
//       formData.append('rating', rating.toString());

//       await axios.post('https://api.woof.lt/api/v1/subscribe', formData, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       });

//       setSubmitted(true);
//       setName('');
//       setEmail('');
//       setReview('');
//       setRating(0);
//     } catch (error) {
//       alert('Įvyko klaida. Bandykite dar kartą.');
//     }
//   };

//   return (
//     <>
//       <div className={styles.overlay} onClick={closeModal}></div>
//       <div className={`${styles.reviewModalWrapper} ${submitted ? styles.submitted : ''}`}>
//         <button className={styles.closeButton} onClick={closeModal}>
//           <CloseIcon />
//         </button>
//         {submitted ? (
//           <div className={styles.thankYouWrapper}>
//             <h2>Ačiū!</h2>
//             <p>Jūsų atsiliepimas išsiųstas.</p>
//             <figure>
//               <img src={DoggoHappy} alt="Doggo thanks you!" />
//             </figure>
//           </div>
//         ) : (
//           <>
//             <h2>Parašykite <span>atsiliepimą</span></h2>
//             <form onSubmit={handleSubmit}>
//               <textarea
//                 placeholder='Jūsų atsiliepimas'
//                 value={review}
//                 onChange={(e) => setReview(e.target.value)}
//               ></textarea>
//               <div className={styles.ratingWrapper}>
//                 {[...Array(5)].map((_, index) => (
//                   <StarIcon
//                     key={index}
//                     onClick={() => handleStarClick(index)}
//                     className={index < rating ? styles.filledStar : styles.emptyStar}
//                   />
//                 ))}
//               </div>
//               <div className={styles.inputsWrapper}>
//                 <div className={styles.nameInputWrapper}>
//                   <input
//                     type="text"
//                     placeholder='Vardas'
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   {nameError && <p className={styles.errorText}>{nameError}</p>}
//                 </div>
//                 <div className={styles.emailInputWrapper}>
//                   <input
//                     type="email"
//                     placeholder='El. paštas'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   {emailError && <p className={styles.errorText}>{emailError}</p>}
//                 </div>
//               </div>
//               <Button type='submit' appearance={ButtonAppearance.ORANGE} padding={ButtonPadding.LARGE} text='Palikti atsiliepimą' />
//             </form>
//           </>
//         )}
//       </div>
//     </>
//   )
// }

// export default ReviewModal