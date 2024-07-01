import styles from './staticNotification.module.scss';
import InfoIcon from '../../../assets/static/icons/icon_info-outline.svg?react';
import WarningIcon from '../../../assets/static/icons/icon_error-outline.svg?react';
import { NotificationType } from '../../../utils/notificationUtils';

interface StaticNotificationProps {
  text: string;
  type: NotificationType;
}

function StaticNotification({ text, type }: StaticNotificationProps) {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      {type === NotificationType.INFO && <InfoIcon className={styles.icon} />}
      {type === NotificationType.WARNING && <WarningIcon className={styles.icon} />}
      <span className={styles.text}>{text}</span>
    </div>
  );
}

export { StaticNotification, NotificationType };
