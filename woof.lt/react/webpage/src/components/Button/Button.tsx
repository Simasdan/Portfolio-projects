import styles from './button.module.scss';

export enum ButtonAppearance {
    WHITE = 'white',
    ORANGE = 'orange'
}

export enum ButtonPadding {
    SMALL = 'small',
    LARGE = 'large'
}

export interface ButtonProps {
    text: string;
    appearance: ButtonAppearance;
    padding: ButtonPadding;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    // GA4 coding
    trackingEvent?: string;
    // GA4 coding
}

function Button({ text, appearance, padding, onClick, type = 'button', trackingEvent }: ButtonProps) {

    // GA4 coding
    const handleClick = () => {

        if (trackingEvent && window.gtag) {
            window.gtag("event", trackingEvent, {
                event_category: "Button",
                event_label: text,
            });
        }

        if (onClick) {
            onClick();
        }
    }
    // GA4 coding

    return (
        <button
            type={type}
            onClick={handleClick} // GA4 coding, changed from onClick to handleClick
            className={`${styles.buttonWrapper} ${styles[appearance]} ${styles[padding]}`}>
            {text}
        </button>
    )
}

export default Button