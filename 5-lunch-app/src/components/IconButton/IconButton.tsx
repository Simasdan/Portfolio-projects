import styles from './iconButton.module.scss';
import ArrowIcon from '../../assets/iconbuttonsvg/ArrowIcon.svg?react';
import LoopIcon from '../../assets/iconbuttonsvg/LoopIcon.svg?react';
import CloseIcon from '../../assets/iconbuttonsvg/CloseIcon.svg?react';
import ShoppingCartIcon from '../../assets/static/icons/icon_shopping-basket.svg?react';

export enum IconButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum IconButtonType {
  ACCENT = 'accent',
  OUTLINED = 'outlined',
  TERTIARY = 'tertiary',
}

export enum IconButtonIcon {
  ARROW,
  LOOP,
  CLOSE,
  CART,
}

export interface IconButtonProps {
  size?: IconButtonSize;
  type?: IconButtonType;
  icon?: IconButtonIcon;
  disabled?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement> | null;
  onClick?: () => void;
}

function IconButton({
  size = IconButtonSize.MEDIUM,
  type = IconButtonType.ACCENT,
  icon = IconButtonIcon.ARROW,
  disabled,
  onClick,
  buttonRef = null,
}: IconButtonProps) {
  const buttonClassName = `${styles.iconButton} ${styles[type]} ${styles[size]} ${disabled ? styles.disabled : ''}`;

  const showIcon = (iconType: IconButtonIcon) => {
    switch (iconType) {
      case IconButtonIcon.ARROW:
        return (
          <ArrowIcon
            width={size === IconButtonSize.MEDIUM ? 8 : 6}
            height={size === IconButtonSize.MEDIUM ? 12 : 10}
          />
        );
      case IconButtonIcon.LOOP:
        return (
          <LoopIcon
            width={size === IconButtonSize.MEDIUM ? 22 : 18}
            height={size === IconButtonSize.MEDIUM ? 16 : 12}
          />
        );
      case IconButtonIcon.CLOSE:
        return (
          <CloseIcon
            width={size === IconButtonSize.MEDIUM ? 14 : 12}
            height={size === IconButtonSize.MEDIUM ? 14 : 12}
          />
        );
      case IconButtonIcon.CART:
        return <ShoppingCartIcon width={24} height={24} />;
      default:
        return null;
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`centered-flexbox ${buttonClassName}`}
      onClick={onClick}
      disabled={disabled}>
      {showIcon(icon)}
    </button>
  );
}

export default IconButton;

// Use CASE:
// import IconButton, { IconButtonSize, IconButtonType, IconButtonIcon } from './components/IconButton/IconButton';

// <IconButton />
// <IconButton disabled />
// <IconButton size={IconButtonSize.SMALL} />
// <IconButton type={IconButtonType.OUTLINED} icon={IconButtonIcon.LOOP} />
// <IconButton type={IconButtonType.OUTLINED} size={IconButtonSize.SMALL} icon={IconButtonIcon.LOOP} />
// <IconButton type={IconButtonType.TERTIARY} icon={IconButtonIcon.CLOSE} />
// <IconButton type={IconButtonType.TERTIARY} size={IconButtonSize.SMALL} icon={IconButtonIcon.CLOSE} />
