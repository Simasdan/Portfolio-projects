import { useState } from 'react';
import styles from './checkbox.module.scss';

export interface CheckboxProps {
  label: string;
  id: string;
  onCheckChange: (isChecked: boolean) => void;
}

function Checkbox({ label, id, onCheckChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    onCheckChange(!isChecked);
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`${styles.checkboxWrapper}`}>
      <label htmlFor={`${id}-checkbox`}>
        <span>{label}</span>
        <input
          onChange={handleChange}
          type="checkbox"
          id={`${id}-checkbox`}
          className={isChecked ? styles.checked : ''}
          checked={isChecked}
          aria-checked={isChecked}
        />
      </label>
    </div>
  );
}

export default Checkbox;

// Use case:
// <Checkbox label='Label text' id='label-text' />