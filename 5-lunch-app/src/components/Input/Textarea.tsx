import styles from './input.module.scss';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export default function Textarea({ label, name, ...rest }: TextareaProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea id={name} {...rest} className={styles.textarea} />
    </div>
  );
}
