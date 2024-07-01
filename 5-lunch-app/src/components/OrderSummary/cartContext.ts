import { createContext } from 'react';
import { DishType } from '../FoodCard/helpers';

export interface MealItem {
  dishType: DishType;
  title: string;
  orderId?: string;
  price: number;
  id: string;
  vendor: string;
}

export interface CartItem {
  selectedDay: string;
  id?: string;
  meal: MealItem;
}

export interface CartContext {
  items: CartItem[];
  balance: number;
  setBalance: (value: number) => void;
  expanded: boolean;
  addToCart: (meal: CartItem) => void;
  removeFromCart: (toRemoveItem: MealItem) => void;
  setExpanded: (value: boolean) => void;
  removeAllItems: () => void;
  toggleSummaryRef: React.RefObject<HTMLButtonElement> | null;
}

export default createContext({
  items: [],
  balance: 0,
  removeAllItems: () => {},
  setBalance: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  expanded: true,
  setExpanded: () => {},
  toggleSummaryRef: null,
} as CartContext);
