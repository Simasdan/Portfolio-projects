import { useContext } from 'react';
import styles from './orderSummary.module.scss';
import DeleteIcon from '../../assets/static/icons/icon_delete.svg?react';
import { getFoodIcon } from '../FoodCard/helpers';
import cartContext, { MealItem } from './cartContext';
import { FREE_MEEL_DAY } from '../../utils/orderSummaryHelpers';
import { formatCurrency } from '../../utils/generalHelpers';

export interface DayItemsProps {
  day: string;
  items: MealItem[];
}

export default function DayItems({ day, items }: DayItemsProps) {
  const cart = useContext(cartContext);
  return (
    <section className={styles.dayItems}>
      <header className={styles.dayItemsHeader}>
        <p className={styles.dayItemsHeaderDay}>{day}</p>
        <div className={styles.separator} />
      </header>
      <div className={styles.dayItemsList}>
        {items.map((item) => (
          <div key={item.orderId} className={styles.dayItemsListItem}>
            <div className={styles.dayItemsListItemContent}>
              <figure>{getFoodIcon(item.dishType)}</figure>

              <div className={styles.dayItemsListItemContentText}>
                <p>{item.vendor}</p>
                <span>{item.title}</span>
              </div>
            </div>
            <div className={styles.dayItemsListItemRight}>
              <p>{day === FREE_MEEL_DAY ? 'Free' : formatCurrency(item.price)}</p>
              <DeleteIcon
                role="button"
                onKeyUp={(event) => {
                  if (event.key === 'Enter') {
                    cart.removeFromCart(item);
                  }
                }}
                onClick={() => cart.removeFromCart(item)}
                tabIndex={0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
