import styles from './orderSummary.module.scss';
import BasketImage from '../../assets/static/supporting-illustrations/basket.png';

export default function EmptyCart() {
  return (
    <figure className={styles.emptyCart}>
      <img className={styles.basketPhoto} src={BasketImage} alt="Empty basket" />
      <p className={styles.emptyCartText}>Your cart is empty</p>
    </figure>
  );
}
