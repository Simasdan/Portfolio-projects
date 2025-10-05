import styles from './reviewCard.module.scss';
import UpperClause from '../../assets/icons/UpperClause.svg?react';
import LowerClause from '../../assets/icons/LowerClause.svg?react';

interface ReviewCardProps {
  image: string;
  name: string;
  text: string;
}

const ReviewCard = ({image, name, text}: ReviewCardProps) => {
  return (
    <article className={styles.reviewCardWrapper}>
        <UpperClause className={styles.upperClause}/>
        <figure>
            <img src={image} alt="Review user image" loading='lazy'/>
        </figure>
        <div className={styles.reviewTextWrapper}>
            <p>{text}</p>
            <span>- {name}</span>
        </div>
        <LowerClause className={styles.lowerClause}/>
    </article>
  )
}

export default ReviewCard