import { useEffect, useRef, useState } from 'react';
import styles from './reusableDropdown.module.scss';
import useClickOutside from '../CustomHooks/useClickOutside';
import DropdownIcon from '../../assets/static/icons/icon_arrow-dropdown.svg?react';

export interface DropdownItem {
  id: number;
  name: string;
}

interface DropdownProps {
  id: string;
  label: string;
  title: string;
  data: DropdownItem[];
  selectedId?: number | null;
  onSelect: (value: number | null) => void;
}

function ReusableDropdown({ id, label, title, data, selectedId = null, onSelect }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect(item.id === -1 ? null : item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      setSelectedItem(data.find((item) => item.id === selectedId));
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  useClickOutside({
    ref: dropdownRef,
    onClickOutside: () => {
      setIsOpen(false);
    },
  });

  const dropdownDataWithAllVendors =
    selectedId !== null && selectedId !== undefined
      ? [{ id: -1, name: 'All vendors' }, ...data]
      : data;

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, item: DropdownItem) => {
    if (e.key === 'Enter') {
      handleChange(item);
    }
  };

  return (
    <div ref={dropdownRef} className={styles.reusableDropdownWrapper}>
      <p className={styles.reusableDropdownLabel}>{label}</p>
      <div
        id={id}
        role="button"
        aria-labelledby="dropdown-label"
        aria-haspopup="listbox"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls={`${id}-dropdown`}
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        className={`${styles.reusableDropdownButton} ${selectedItem !== null && selectedItem !== undefined ? styles.dropdownSelected : ''}`}>
        <span>{selectedItem?.name || title}</span>
        <DropdownIcon className={isOpen ? styles.dropdownIconRotate : ''} />
      </div>
      {isOpen && (
        <div className={styles.reusableDropdownMenu} aria-label="Dropdown menu">
          <ul className={styles.reusableDropdownList} role="menu" aria-orientation="vertical">
            {dropdownDataWithAllVendors?.map((item) => (
              <li
                role="option"
                aria-selected={item.id === selectedId}
                key={item.id}
                className={styles.reusableDropdownListItem}
                onClick={() => handleChange(item)}
                onKeyDown={(e) => handleOptionKeyDown(e, item)}
                tabIndex={0}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ReusableDropdown;
