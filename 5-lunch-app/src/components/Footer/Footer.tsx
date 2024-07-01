import styles from './footer.module.scss';
import { getCurrentYear } from '../../utils/dateUtils';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <p>Sourcery Academy</p>
      </div>
      <div className={styles.footerMiddle}>
        <p>Lunch App</p>
      </div>
      <div className={styles.footerRight}>
        <p>© {getCurrentYear()} Cognizant</p>
      </div>
    </div>
  );
}
