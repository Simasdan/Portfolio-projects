import styles from './tabButton.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
}

function TabButton({ text, onClick, disabled, selected = false }: ButtonProps) {
  return (
    <div className={`${styles.container} ${disabled ? styles.disabled : ''}`}>
      <div className={styles.overlay} />
      <button
        onClick={onClick}
        disabled={disabled}
        type="button"
        className={`${styles.btn} ${selected ? styles.selected : ''}`}>
        {text}
      </button>
    </div>
  );
}
export default TabButton;
