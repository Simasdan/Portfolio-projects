import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './toastNotification.module.scss';
import InfoIcon from '../../../assets/static/icons/icon_info-outline.svg?react';
import SuccessIcon from '../../../assets/static/icons/icon_check-circle-outline.svg?react';
import WarningIcon from '../../../assets/static/icons/icon_error-outline.svg?react';
import IconButton, { IconButtonIcon, IconButtonType } from '../../IconButton/IconButton';
import { NOTIFICATION_TIMEOUT, NotificationType } from '../../../utils/notificationUtils';

// USAGE
// const toastRef = useRef<ToastRefObject>(null);
// const showNotification = () => {
//   toastRef.current!.showToast('someText', NotificationType.INFO);
// };
// <ToastNotification toastRef={toastRef} />

interface Notification {
  text: string;
  type: NotificationType;
  isClosing: boolean;
}

export interface ToastRefObject {
  showToast: (text: string, type: NotificationType) => void;
}

interface ToastProps extends React.AllHTMLAttributes<ToastRefObject> {
  toastRef: React.Ref<ToastRefObject>;
}

function ToastNotification({ toastRef }: ToastProps) {
  const [notification, setNotification] = useState<Notification | null>(null);
  const autoCloseTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const [notificationKey, setNotificationKey] = useState(0);

  const clearTimer = (timeout: NodeJS.Timeout | null) => timeout && clearTimeout(timeout);

  const removeNotification = () => {
    setNotification((prevNotification) => ({
      ...prevNotification!,
      isClosing: true,
    }));

    closeTimeout.current = setTimeout(() => {
      setNotification(null);
    }, 300);
  };

  const handleClick = () => {
    clearTimer(autoCloseTimeout.current);
    removeNotification();
  };

  useEffect(
    () => () => {
      clearTimer(autoCloseTimeout.current);
      clearTimer(closeTimeout.current);
    },
    []
  );

  useImperativeHandle(toastRef, () => ({
    showToast(text, type) {
      clearTimer(closeTimeout.current);
      clearTimer(autoCloseTimeout.current);

      setNotification({ text, type, isClosing: false });
      setNotificationKey((prevKey) => prevKey + 1);

      autoCloseTimeout.current = setTimeout(removeNotification, NOTIFICATION_TIMEOUT);
    },
  }));

  return (
    <div key={notificationKey}>
      {notification && (
        <div
          className={`${styles.container} ${styles[notification.type]} ${notification.isClosing ? styles.slideOut : ''}`}>
          {notification.type === NotificationType.INFO && <InfoIcon className={styles.icon} />}
          {notification.type === NotificationType.SUCCESS && (
            <SuccessIcon className={styles.icon} />
          )}
          {notification.type === NotificationType.WARNING && (
            <WarningIcon className={styles.icon} />
          )}
          <span className={styles.text}>{notification.text}</span>
          <div className={styles.verticalLine} />
          <IconButton
            type={IconButtonType.TERTIARY}
            icon={IconButtonIcon.CLOSE}
            onClick={() => handleClick()}
          />
        </div>
      )}
    </div>
  );
}

export default ToastNotification;
