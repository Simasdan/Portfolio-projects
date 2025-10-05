import styles from './salonsPage.module.scss';
import SalonsImage from '../../assets/images/AboutUsImage.png';

const SalonsPage = () => {
  return (
    <section className={styles.salonsPageWrapper}>
        <h1>Jau Greitai!</h1>
        <figure>
          <img src={SalonsImage} alt="Jau greitai, draugai!" />
        </figure>
    </section>
  )
}

export default SalonsPage