import { RefObject, useEffect } from 'react';

interface ClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  onClickOutside: (clickedOutside: boolean) => void;
}

function useClickOutside({ ref, onClickOutside }: ClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside(false);
      }
    };

    const handleTouchOutside = (e: TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;

// Use case:
// import useClickOutside from '../CustomHooks/useClickOutside';
// useClickOutside({
//     ref:  "create a variable for ref, like const dropdownRef",
//     onClickOutside: () => {setDropdownVisible(false)}
//   });
