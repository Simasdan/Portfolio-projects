import { useState } from 'react';
import styles from './checkmark.module.scss';

export interface CheckmarkProps {
  label: string;
  error?: boolean;
  disabled?: boolean;
  id: string;
  onCheckChange: (isChecked: boolean) => void;
}

function Checkmark({ label, error = false, disabled = false, id, onCheckChange }: CheckmarkProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    onCheckChange(!isChecked);

    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`${styles.checkboxWrapper} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
      <label htmlFor={`${id}-checkbox`}>
        <input
          onChange={handleChange}
          type="checkbox"
          id={`${id}-checkbox`}
          className={isChecked ? styles.checked : ''}
          checked={isChecked}
          aria-checked={isChecked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkmark;

// Use case:
// <Checkmark label='Label text' id='label-text' />
// <Checkmark label='Label text' id='label-text' disabled />
// <Checkmark label='Label text' id='label-text' error />
