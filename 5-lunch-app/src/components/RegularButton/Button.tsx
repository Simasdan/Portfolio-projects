import styles from './button.module.scss';
import AddIcon from '../../assets/static/icons/icon_add.svg?react';
import ArrowIcon from '../../assets/static/icons/icon_arrow-forward.svg?react';

// USE CASE
// import { Button, ButtonAppearance, ButtonSize, ButtonIcon, ButtonType } from './components/RegularButton/Button';
// <Button
//   text="Click me"
//   appearance={ButtonAppearance.PRIMARY}
//   size={ButtonSize.LARGE}
//   icon={ButtonIcon.ADD}
//   onClick={() => {}}
//   buttonType={ButtonType.SUBMIT}
// />;

enum ButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

enum ButtonSize {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

enum ButtonIcon {
  ADD = 'add',
  ARROW = 'arrow',
  NONE = 'none',
}

enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

interface ButtonProps {
  text: string;
  appearance: ButtonAppearance;
  size: ButtonSize;
  icon?: ButtonIcon;
  disabled?: boolean;
  buttonType?: ButtonType;
  onClick?: () => void;
}

function Button({
  text,
  appearance,
  size,
  onClick,
  icon = ButtonIcon.NONE,
  disabled,
  buttonType = ButtonType.BUTTON,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={buttonType === ButtonType.SUBMIT ? 'submit' : 'button'}
      className={`${styles.btn} ${styles[appearance]} ${styles[size]} ${styles[icon]}`}
      disabled={disabled}>
      {icon === ButtonIcon.ADD && <AddIcon className={styles.icon} />}
      <span className={styles.text}>{text}</span>
      {icon === ButtonIcon.ARROW && <ArrowIcon className={styles.icon} />}
    </button>
  );
}

export { Button, ButtonAppearance, ButtonSize, ButtonIcon, ButtonType };
