import styles from './activityCard.module.scss';
import { useEffect } from 'react';
import Button, { ButtonAppearance, ButtonIcon, ButtonText } from '../../components/Button/Button';
import {renderImage, ActivityImage} from './helpers';

interface ActivityCardProps {
    title: string;
    category: string;
    participants: number;
    price: string;
    accessibility: string;
    img: ActivityImage;
    link?: string;
}

const ActivityCard = ({ title, category, participants, price, img, link, accessibility }: ActivityCardProps) => {

    const fetchActivity = async () => {
        const response = await fetch('http://localhost:3002/activities');
        await response.json();
    }

    useEffect(() => {
        fetchActivity();
    }, []);

    const capitalizeFirstLetter = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <div className={styles.activityCardWrapper}>
            <div className={`${styles.activityCard} ${styles[category]}`}>
                <div className={styles.title}>
                    <h1 className={styles.activityCardTitle}>
                        {title}
                    </h1>
                </div>
                <div className={styles.activityCardContent}>
                    <div className={styles.activityCardContentTabs}>
                        <div className={styles.tab}>
                            <h3>CATEGORY</h3>
                            <p>{capitalizeFirstLetter(category)}</p>
                        </div>
                        <div className={styles.tab}>
                            <h3>PARTICIPANTS</h3>
                            <p>{participants}</p>
                        </div>
                        <div className={styles.tab}>
                            <h3>PRICE INDICATOR</h3>
                            <p>{price}</p>
                        </div>
                        <div className={styles.tab}>
                            <p>{accessibility}</p>
                        </div>
                    </div>
                    {link && (
                        <div className={styles.moreInformation}>
                            <Button
                                text={ButtonText.MOREINFO}
                                appearance={ButtonAppearance.INFO}
                                icon={ButtonIcon.ARROW}
                                onClick={() => { console.log('click') }}
                                href={link}
                            />
                        </div>
                    )}
                </div>
            </div>
            <figure className={styles.activityCardImg}>
                {renderImage(img)}
            </figure>
        </div>
    );
}

export default ActivityCard
