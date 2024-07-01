import { menuStrings } from '../../utils/strings';
import styles from './header.module.scss';

// Use case example "<Header page = "lunchMenu"/>"

export default function Header({ page }: { page: string }) {
  return (
    <div className={styles.headerBody}>
      <h1 className={styles.headerTitle}>{menuStrings[`${page}PageTitle`]}</h1>
      <h3 className={styles.headerSubtitle}>{menuStrings[`${page}PageSubtitle`]}</h3>
    </div>
  );
}
