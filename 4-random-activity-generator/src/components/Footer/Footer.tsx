import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <p>Portfolio Projects</p>
      </div>
      <div className={styles.footerMiddle}>
        <p>Activity Generator</p>
      </div>
      <div className={styles.footerRight}>
        <p>© 2024 Simdan</p>
      </div>
    </div>
  );
}