import { useEffect, useMemo, useRef, useState } from 'react';
import CartContext, { CartItem, MealItem } from './cartContext';
import ToastNotification, {
  ToastRefObject,
} from '../Notifications/ToastNotification/ToastNotification';
import { checkForFridayMeal, generateUniqueId } from '../../utils/orderSummaryHelpers';
import { NotificationType } from '../../utils/notificationUtils';
import { STOP_ORDERS_HOUR, getCurrentWeekdayName } from '../../utils/dateUtils';
import { LocalStorageKeys } from '../../types/localStorageEnums';
import useFetch from '../../api/useDataFetching';
import { Endpoint } from '../../api/endpoints';
import { UserData } from '../../api/apiModel';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';

export default function OrderSummaryContextWrapper({
  children,
  cartExpanded,
  setCartExpanded,
}: {
  children: React.ReactNode;
  cartExpanded: boolean;
  setCartExpanded: (value: boolean) => void;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.CART_ITEMS) ?? '[]')
  );

  const [balance, setBalance] = useState<number>(0);
  const cartToast = useRef<ToastRefObject>(null);
  const toggleSummaryRef = useRef<HTMLButtonElement>(null);

  const { data } = useFetch<UserData[]>(Endpoint.USERS);
  const loggedInUserId = JSON.parse(sessionStorage.getItem(SessionStorageKeys.TOKEN) ?? '{}')?.id;
  const user = data?.find((u) => u.id === loggedInUserId);

  useEffect(() => {
    if (user) {
      setBalance(user.balance);
    }
  }, [user]);

  const cart = useMemo(
    () => ({
      items: cartItems,
      balance,
      setBalance,
      setCartItems,
      expanded: cartExpanded,

      setExpanded: (value: boolean) => {
        if (!value) toggleSummaryRef.current?.focus();
        setCartExpanded(value);
      },
      toggleSummaryRef,

      removeAllItems: (day?: string) => {
        if (day) {
          setCartItems((prev) => {
            const items = prev.filter((item) => item.selectedDay !== day);
            localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify(items));
            return items;
          });
        } else {
          setCartItems([]);
          localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify([]));
        }
      },

      addToCart: (item: { selectedDay: string; meal: MealItem }) => {
        setCartItems((prev: CartItem[]) => {
          if (checkForFridayMeal(prev, item)) {
            cartToast.current?.showToast(
              `On Fridays you can only order one soup and/or one side.`,
              NotificationType.WARNING
            );
            return prev;
          }
          const items = [...prev, { ...item, id: generateUniqueId() }];
          localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify(items));
          cartToast.current?.showToast(
            `${item.meal.title} has been added to your cart. Excellent choice!`,
            NotificationType.INFO
          );
          return items;
        });
      },
      removeFromCart: (toRemoveItem: MealItem) => {
        setCartItems((prev) => {
          const items = prev.filter((item) => item.id !== toRemoveItem.orderId);
          localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify(items));
          cartToast.current?.showToast(
            `${toRemoveItem.title} has been removed from your cart.`,
            NotificationType.INFO
          );
          return items;
        });
      },
    }),
    [cartItems, cartExpanded, balance, toggleSummaryRef]
  );

  useEffect(() => {
    const date = new Date();
    if (date.getHours() >= STOP_ORDERS_HOUR) {
      const today = getCurrentWeekdayName();
      const todayItems = cartItems.filter((item) => item.selectedDay === today);
      if (todayItems.length > 0) {
        cartToast.current?.showToast(
          `Todays items have been removed from your cart.`,
          NotificationType.WARNING
        );
        setCartItems([]);
        localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify([]));
      }
    }
  }, []);

  if (!user) return 'loading';

  return (
    <>
      <ToastNotification toastRef={cartToast} />
      <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
    </>
  );
}
