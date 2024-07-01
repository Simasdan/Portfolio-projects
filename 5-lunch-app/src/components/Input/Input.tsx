import styles from './input.module.scss';
import SearchIcon from '../../assets/static/icons/icon_search.svg?react';
import DropdownIcon from '../../assets/static/icons/icon_arrow-dropdown.svg?react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  icon?: boolean;
  label: string;
  name: string;
  dropdownIcon?: boolean;
}

export function Input({
  error = false,
  errorText = '',
  disabled = false,
  icon = false,
  dropdownIcon = false,
  label,
  name,
  ...rest
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      {icon && <SearchIcon className={styles.inputIcon} />}
      <label
        htmlFor={name}
        className={`${styles.label} ${disabled ? styles['label--disabled'] : ''} ${error ? styles['label--error'] : ''}`}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={name}
          {...rest}
          disabled={disabled}
          className={`${styles.input} ${error ? styles['input--error'] : ''} ${icon ? styles.inputIcon__place : ''}`}
          aria-describedby={error ? `${name}-error` : undefined}
          aria-invalid={error}
        />
        {dropdownIcon && <DropdownIcon className={styles.dropdownIcon} />}
      </div>
      {errorText && (
        <span id={`${name}-error`} className={styles.errorText}>
          {errorText}
        </span>
      )}
    </div>
  );
}

// USE CASE
// import { Input } from './components/Input/Input';

// <Input label="Your string for label" name="string for label-name and input-id"/>

// You can pass states:   error | disabled
//   <Input label="Your label" name="string" error />

//   you can pass all props from HTML <input> element attributes: type | placeholder | autofocus | value | pattern | and all others

//  !attribute type="" from HTML is highly recommended to use!
//   <Input label="Your E-mail" name="email" type="email" placeholder="Write E-mail address" />

// you can pass ref like this: inputRef={emailInputRef} - emailInputRef in this case is a ref, created in your component
