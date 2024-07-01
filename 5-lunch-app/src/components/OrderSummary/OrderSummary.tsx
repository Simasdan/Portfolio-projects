import { useContext, useState, useEffect } from 'react';
import styles from './orderSummary.module.scss';
import cartContext from './cartContext';
import EmptyCart from './EmptyCart';
import DayItems from './DayItem';
import {
  FREE_MEEL_DAY,
  calculateAndFormatTotalCartPrice,
  calculateNewBalance,
  groupMealByDay,
  mergeUserOrders,
} from '../../utils/orderSummaryHelpers';
import PressAndHoldButton from '../PressAndHoldButton/PressAndHoldButton';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from '../IconButton/IconButton';
import OrderSummaryDialogs, { OrderStatus } from './OrderSummaryDialogs';
import useFetch from '../../api/useDataFetching';
import { Endpoint } from '../../api/endpoints';
import { UserData } from '../../api/apiModel';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';
import usePatch from '../../api/useDataPatching';

interface OrderSummaryProps {
  showCloseIcon?: boolean;
}
export default function OrderSummary({ showCloseIcon = true }: OrderSummaryProps) {
  const { items, expanded, setExpanded, removeAllItems, setBalance, balance } =
    useContext(cartContext);
  const { data } = useFetch<UserData[]>(Endpoint.USERS);

  const [isConfirmed, setIsConfirmed] = useState(false);

  const mappedMealsByDay = groupMealByDay(items);
  const totalPrice = calculateAndFormatTotalCartPrice(items);

  const [orderStatus, setOrderStatus] = useState<null | OrderStatus>(null);
  const { putData, error, responseData } = usePatch<UserData>(Endpoint.USERS);

  const handleCheckout = async () => {
    const loggedInUserId = JSON.parse(sessionStorage.getItem(SessionStorageKeys.TOKEN) ?? '{}')?.id;
    const user = data?.find((u) => u.id === loggedInUserId);
    if (!user) return;

    const totalNumberPrice = Number(calculateAndFormatTotalCartPrice(items, false));

    if ((balance ?? 0) < totalNumberPrice) {
      setOrderStatus(OrderStatus.NOT_ENOUGH_BALANCE);
      return;
    }

    const newBalance = calculateNewBalance(balance, totalNumberPrice);

    const existingOrders = user.orders || [];

    if (
      existingOrders.some((order) => order.weekDay === FREE_MEEL_DAY) &&
      items.some((item) => item.selectedDay === FREE_MEEL_DAY)
    ) {
      setOrderStatus(OrderStatus.FRIDAY_MEAL_ALREADY_BOOKED);
      return;
    }

    const mergedOrders = mergeUserOrders(existingOrders, items);
    const updatedUserData: UserData = {
      ...user,
      balance: newBalance,
      orders: mergedOrders,
    };
    putData(updatedUserData, loggedInUserId);
  };

  useEffect(() => {
    if (error && responseData !== null) {
      setOrderStatus(OrderStatus.ERROR);
    }

    if (!error && responseData !== null) {
      setOrderStatus(OrderStatus.SUCCESS);
      removeAllItems();
      setBalance(responseData.balance);
    }
  }, [responseData, error]);

  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (!expanded) {
      setTimeout(() => {
        setHide(true);
      }, 200);
    } else {
      setHide(false);
    }
  }, [expanded]);

  return (
    <>
      <OrderSummaryDialogs
        onClose={() => {
          setIsConfirmed(false);
        }}
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
      />

      <aside
        className={`${styles.orderSummary} ${expanded ? styles.orderSummaryExpanded : ''} ${hide ? styles.orderSummaryHidden : ''}`}>
        <header className={styles.orderSummaryTitle}>
          <h1 className={styles.orderSummaryTitleText}>Order Summary</h1>
          {showCloseIcon && (
            <IconButton
              type={IconButtonType.TERTIARY}
              size={IconButtonSize.MEDIUM}
              icon={IconButtonIcon.CLOSE}
              onClick={() => setExpanded(false)}
            />
          )}
        </header>
        <section className={styles.orderSummaryList}>
          {!items.length ? (
            <EmptyCart />
          ) : (
            Object.keys(mappedMealsByDay).map((day) => (
              <DayItems key={day} day={day} items={mappedMealsByDay[day]} />
            ))
          )}
        </section>
        <footer className={styles.orderSummaryFooter}>
          <div className={styles.separator} />
          <div className={styles.orderSummaryFooterContent}>
            <article className={styles.orderSummaryFooterContentPrice}>
              <p className={styles.orderSummaryFooterContentPriceText}>Total Price</p>
              <span className={styles.orderSummaryFooterContentPriceAmount}>{totalPrice}</span>
            </article>
          </div>
          <PressAndHoldButton
            setIsConfirmed={setIsConfirmed}
            isConfirmed={isConfirmed}
            disabled={items.length === 0}
            onConfirm={handleCheckout}
          />
        </footer>
      </aside>
    </>
  );
}
