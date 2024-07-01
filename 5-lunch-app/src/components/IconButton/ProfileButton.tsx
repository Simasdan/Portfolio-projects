import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './iconButton.module.scss';
import ProfileCarretIcon from '../../assets/iconbuttonsvg/ProfileCarretIcon.svg?react';
import Dropdown, { Option } from '../Dropdown/Dropdown';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';
import { RoutePath } from '../../types/navigationEnums';
import useClickOutside from '../CustomHooks/useClickOutside';

interface ProfileButtonProps {
  onClick: () => void;
  dropdownOptions: Option[];
}

function ProfileButton({ onClick, dropdownOptions }: ProfileButtonProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: dropdownRef,
    onClickOutside: () => {
      setDropdownVisible(false);
    },
  });

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = () => {
    sessionStorage.removeItem(SessionStorageKeys.TOKEN);
    navigate(RoutePath.LOGIN);
    handleDropdownToggle();
  };

  const handleProfileCartClick = () => {
    onClick();
    handleDropdownToggle();
  };

  return (
    <div className={styles.profileButtonWrapper} ref={dropdownRef}>
      <button
        aria-label="Profile Options"
        type="button"
        className={`${styles.positioning} ${styles['profile-button']}`}
        onClick={handleProfileCartClick}>
        <ProfileCarretIcon />
      </button>
      {dropdownVisible && <Dropdown options={dropdownOptions} onSelect={handleOptionSelect} />}
    </div>
  );
}

export default ProfileButton;
