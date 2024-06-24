import styles from './button.module.scss';
import ArrowIcon from '../../assets/icons/arrow-forward.svg?react';
import SearchIcon from '../../assets/icons/search.svg?react';

export enum ButtonAppearance {
  INFO = 'info',
  GENERATE = 'generate'
}

export enum ButtonIcon {
  ARROW = 'arrow',
  SEARCH = 'search'
}

export enum ButtonText {
  MOREINFO = 'More information',
  GENERATENEW = 'Generate new Activity'
}

export interface ButtonProps {
  text: ButtonText;
  appearance: ButtonAppearance;
  icon: ButtonIcon;
  disabled?: boolean;
  onClick: () => void;
  href?: string;
}

const Button = ({ text, appearance, icon, disabled = false, onClick, href }: ButtonProps) => {

  if (href) {
    return (
      <a
        className={appearance === ButtonAppearance.INFO ? `${styles.moreinfoButton}` : `${styles.generateButton}`}
        href={href}
        target='_blank'
        onClick={onClick}
      >
        {icon === ButtonIcon.SEARCH ? <SearchIcon /> : ''}
        {text}
        {icon === ButtonIcon.ARROW ? <ArrowIcon /> : ''}
      </a>
    )
  }

  return (
    <button
      className={appearance === ButtonAppearance.INFO ? `${styles.moreinfoButton}` : `${styles.generateButton}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon === ButtonIcon.SEARCH ? <SearchIcon /> : ''}
      {text}
      {icon === ButtonIcon.ARROW ? <ArrowIcon /> : ''}
    </button>
  )
}

export default Button