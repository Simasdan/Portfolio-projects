import { useEffect, useRef, useState } from 'react';
import styles from './pressAndHoldButton.module.scss';
import CheckIcon from '../../assets/static/icons/icon_check-circle.svg?react';

// USAGE
// <PressAndHoldButton onConfirm={() => console.log('confirmed')} />

interface PressAndHoldButtonProps {
  disabled?: boolean;
  setIsConfirmed: (value: boolean) => void;
  isConfirmed: boolean;
  onConfirm: () => void;
}

const PRESS_AND_HOLD_TIMEOUT = 1500;

function PressAndHoldButton({
  disabled,
  onConfirm,
  setIsConfirmed,
  isConfirmed,
}: PressAndHoldButtonProps) {
  const [isPressed, setIsPressed] = useState<boolean | undefined>(undefined);

  const timeout = useRef<NodeJS.Timeout>();

  const handleHoldStart = () => {
    if (isConfirmed) return;
    setIsPressed(true);

    timeout.current = setTimeout(() => {
      setIsConfirmed(true);
      onConfirm();
    }, PRESS_AND_HOLD_TIMEOUT);
  };

  const handleHoldEnd = () => {
    if (!isPressed) return;
    setIsPressed(false);
    clearTimeout(timeout.current);
  };

  const handleMouseDown = () => handleHoldStart();

  const handleMouseUp = () => handleHoldEnd();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') handleHoldStart();
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') handleHoldEnd();
  };

  useEffect(
    () => () => {
      clearTimeout(timeout.current);
    },
    []
  );

  return (
    <button
      type="button"
      className={`${styles.btn} ${isConfirmed ? styles.confirmed : ''} ${isPressed === true ? styles.pressed : ''} ${isPressed === false ? styles.released : ''}`}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}>
      <div className={styles.content}>
        {isConfirmed ? (
          <>
            <span>Confirmed</span>
            <CheckIcon className={styles.icon} />
          </>
        ) : (
          <span>Press & Hold to Send</span>
        )}
      </div>
    </button>
  );
}

export default PressAndHoldButton;
