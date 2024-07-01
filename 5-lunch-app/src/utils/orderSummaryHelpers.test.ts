import { Order } from '../api/apiModel';
import { CartItem, MealItem } from '../components/OrderSummary/cartContext';
import {
  calculateAndFormatTotalCartPrice,
  groupMealByDay,
  mergeUserOrders,
} from './orderSummaryHelpers';

enum DishType {
  Logo = 'logo',
  Wrap = 'wrap',
  Soup = 'soup',
  Thai = 'thai',
  Pizza = 'pizza',
  Sandwich = 'sandwich',
  Burger = 'burger',
}

const mockCart1Data: CartItem[] = [
  {
    selectedDay: 'Monday',
    meal: { vendor: 'vendor', title: 'test1', id: 'x', dishType: DishType.Soup, price: 5 },
  },
  {
    selectedDay: 'Monday',
    meal: { vendor: 'vendor', title: 'test2', id: 'x', dishType: DishType.Burger, price: 10 },
  },
  {
    selectedDay: 'Thursday',
    meal: { vendor: 'vendor', title: 'test3', id: 'x', dishType: DishType.Pizza, price: 13.556 },
  },
];

// -----------------function alculateAndFormatTotalCartPrice-----------------

describe('calculateAndFormatTotalCartPrice', () => {
  it('should sum all prices of cart items and format price output number', () => {
    expect(calculateAndFormatTotalCartPrice(mockCart1Data)).toEqual('€28.56');
  });
});

describe('calculateAndFormatTotalCartPrice', () => {
  const mockCartData: CartItem[] = [
    {
      selectedDay: 'Monday',
      meal: { vendor: 'vendor', title: 'test6', id: 'x', dishType: DishType.Burger, price: 5.554 },
    },
    {
      selectedDay: 'Thursday',
      meal: { vendor: 'vendor', title: 'test7', id: 'x', dishType: DishType.Pizza, price: 0 },
    },
  ];

  it('should sum all prices of cart items and format price output number', () => {
    expect(calculateAndFormatTotalCartPrice(mockCartData)).toEqual('€5.55');
  });
});

// -------------------------function groupMealByDay---------------------------

describe('groupMealByDay', () => {
  it('should group cart items into meal items where key is weekday', () => {
    expect(groupMealByDay(mockCart1Data)).toMatchObject({
      Monday: [
        { dishType: DishType.Soup, price: 5, title: 'test1', id: 'x' },
        { title: 'test2', id: 'x', dishType: DishType.Burger, price: 10 },
      ] as MealItem[],
      Thursday: [
        { title: 'test3', id: 'x', dishType: DishType.Pizza, price: 13.556 },
      ] as MealItem[],
    });
  });
});

describe('groupMealByDay', () => {
  const mockCartData: CartItem[] = [
    {
      selectedDay: 'Monday',
      meal: { vendor: 'vendor', title: 'test5', id: 'x', dishType: DishType.Soup, price: 5 },
    },
    {
      selectedDay: 'Sunday',
      meal: { vendor: 'vendor', title: 'test5', id: 'x', dishType: DishType.Burger, price: 5 },
    },
  ];

  it('if selectedDay dosent match data do not push data into array', () => {
    expect(groupMealByDay(mockCartData)).toMatchObject({
      Monday: [{ dishType: DishType.Soup, price: 5, title: 'test5' }] as MealItem[],
    });
  });
});

describe('groupMealByDay', () => {
  const mockCartData: CartItem[] = [
    {
      selectedDay: '',
      meal: { vendor: 'vendor', title: 'test5', id: 'x', dishType: DishType.Soup, price: 5 },
    },
    {
      selectedDay: '',
      meal: { vendor: 'vendor', title: 'test5', id: 'x', dishType: DishType.Burger, price: 5 },
    },
  ];

  it('if selectedDay is undefined do not push data into array', () => {
    expect(groupMealByDay(mockCartData)).toMatchObject({});
  });
});

// ---------------------function mergeUserOrders-------------------------

describe('mergeUserOrders', () => {
  it('should merge existing orders and new items from CartItem', () => {
    const existingOrders: Order[] = [
      { weekDay: 'Monday', mealIds: [1, 2] },
      { weekDay: 'Wednesday', mealIds: [3] },
    ];

    const items: CartItem[] = [
      {
        selectedDay: 'Monday',
        meal: { id: '4', vendor: 'vendor', title: 'test1', dishType: DishType.Burger, price: 5 },
      },
      {
        selectedDay: 'Tuesday',
        meal: { id: '5', vendor: 'vendor', title: 'test2', dishType: DishType.Burger, price: 5 },
      },
    ];

    const expectedOrders: Order[] = [
      { weekDay: 'Monday', mealIds: [1, 2, 4] },
      { weekDay: 'Wednesday', mealIds: [3] },
      { weekDay: 'Tuesday', mealIds: [5] },
    ];

    expect(mergeUserOrders(existingOrders, items)).toEqual(expectedOrders);
  });

  it('if the day does not exist in existing orders, it should add new day with array of mealIds on it', () => {
    const existingOrders: Order[] = [{ weekDay: 'Monday', mealIds: [1, 2] }];

    const items: CartItem[] = [
      {
        selectedDay: 'Tuesday',
        meal: { id: '3', vendor: 'vendor', title: 'test3', dishType: DishType.Burger, price: 5 },
      },
    ];

    const expectedOrders: Order[] = [
      { weekDay: 'Monday', mealIds: [1, 2] },
      { weekDay: 'Tuesday', mealIds: [3] },
    ];

    expect(mergeUserOrders(existingOrders, items)).toEqual(expectedOrders);
  });

  it('should correctly handle empty existing orders', () => {
    const existingOrders: Order[] = [];

    const items: CartItem[] = [
      {
        selectedDay: 'Monday',
        meal: { id: '1', vendor: 'vendor', title: 'test4', dishType: DishType.Burger, price: 5 },
      },
      {
        selectedDay: 'Tuesday',
        meal: { id: '2', vendor: 'vendor', title: 'test5', dishType: DishType.Burger, price: 5 },
      },
    ];

    const expectedOrders: Order[] = [
      { weekDay: 'Monday', mealIds: [1] },
      { weekDay: 'Tuesday', mealIds: [2] },
    ];

    expect(mergeUserOrders(existingOrders, items)).toEqual(expectedOrders);
  });
});
