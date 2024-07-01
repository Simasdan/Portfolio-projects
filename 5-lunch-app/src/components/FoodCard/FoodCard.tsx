import { useState } from 'react';
import styles from './foodCard.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from '../RegularButton/Button';
import SolarStarIcon from '../../assets/static/icons/icon_solar-star.svg?react';
import PlantIcon from '../../assets/static/icons/icon_plant.svg?react';
import ChiliIcon from '../../assets/static/icons/icon_chili-mild.svg?react';
import { getFoodIcon, DishType } from './helpers';
import FoodModal from '../FoodModal/FoodModal';
import { formatPrice, formatRating } from '../../utils/priceUtils';
import { FREE_MEAL_DAY, FREE_MEAL_TEXT } from '../../utils/constants';

export interface FoodCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  picture: DishType;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  rating: number | string;
  vendor: string;
  weekday: string;
  handleAddToCart: () => void;
}

function FoodCard({
  id,
  title,
  description,
  price,
  picture,
  isVegetarian = false,
  isSpicy = false,
  rating,
  vendor,
  weekday,
  handleAddToCart,
}: FoodCardProps) {
  const formattedPrice = formatPrice(price);
  const formattedRating = formatRating(rating);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMoreInfoClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <article className={styles.foodCard}>
        <header className={styles.cardHeader}>
          <figure className={styles.cardHeaderLogo}>{getFoodIcon(picture)}</figure>
          <div className={styles.cardSubHeader}>
            <p className={styles.titleXS}>{vendor}</p>
            <p className={styles.titleS}>{title}</p>
            <div className={styles.cardSubHeaderFiguresWrap}>
              {isVegetarian && (
                <figure className={styles.cardSubHeaderFigures}>
                  <PlantIcon className={styles.plant} />
                </figure>
              )}
              {isSpicy && (
                <figure className={styles.cardSubHeaderFigures}>
                  <ChiliIcon className={styles.chili} />
                </figure>
              )}
            </div>
          </div>
        </header>

        <section className={styles.cardBody}>
          <p className={styles.bodyM}>{description}</p>
          <div className={styles.cardSubBody}>
            <div className={styles.rating}>
              {typeof rating === 'number' && (
                <figure className={styles.ratingFigure}>
                  <SolarStarIcon className={styles.ratingLogo} />
                </figure>
              )}
              <p className={styles.labelXS}>{formattedRating}</p>
            </div>
            <Button
              text="More Info"
              appearance={ButtonAppearance.TERTIARY}
              size={ButtonSize.SMALL}
              icon={ButtonIcon.ARROW}
              onClick={handleMoreInfoClick}
            />
          </div>
        </section>

        <footer className={styles.cardFooter}>
          <div className={styles.cardFooterText}>
            <p className={styles.bodyS}>Price</p>
            <p className={styles.titleL}>
              {weekday !== FREE_MEAL_DAY ? formattedPrice : FREE_MEAL_TEXT}
            </p>
          </div>
          <Button
            text="Add to cart"
            appearance={ButtonAppearance.SECONDARY}
            size={ButtonSize.SMALL}
            icon={ButtonIcon.ADD}
            onClick={handleAddToCart}
          />
        </footer>
      </article>

      {isModalOpen && (
        <FoodModal
          id={id}
          title={title}
          description={description}
          price={price}
          picture={picture}
          isVegetarian={isVegetarian}
          isSpicy={isSpicy}
          rating={rating}
          vendor={vendor}
          weekday={weekday}
          handleAddToCart={handleAddToCart}
          handleCloseModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default FoodCard;
