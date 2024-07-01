import styles from './dropdown.module.scss';

export interface Option {
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: Option[];
  onSelect: (option: string) => void;
}

function Dropdown({ options, onSelect }: DropdownProps) {
  const handleClick = (option: string) => {
    onSelect(option);
  };

  return (
    <div className={styles.dropdownWrapper}>
      {options.map((option) => (
        <button
          className={`${styles.dropdownButton}`}
          type="button"
          key={option.value}
          onClick={() => handleClick(option.value)}>
          {option.icon && option.icon}
          {option.value}
        </button>
      ))}
    </div>
  );
}

export default Dropdown;
