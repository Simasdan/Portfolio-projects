import { sortMeals, Ratings } from './sortMeals';
import { MealData } from '../api/apiModel';
import { SortTerm } from '../components/Filters/Filters';
import { DishType } from '../components/FoodCard/helpers';

const mockMealsData: MealData[] = [
  {
    id: '1',
    title: 'Meal A',
    price: 10,
    orderCount: 5,
    vendorId: 1,
    weekDays: ['Monday'],
    vegetarian: false,
    spicy: false,
    dishType: DishType.Soup,
    description: 'Description A',
    mealType: 'Type A',
  },
  {
    id: '2',
    title: 'Meal B',
    price: 20,
    orderCount: 10,
    vendorId: 2,
    weekDays: ['Tuesday'],
    vegetarian: true,
    spicy: false,
    dishType: DishType.Burger,
    description: 'Description B',
    mealType: 'Type B',
  },
  {
    id: '3',
    title: 'Meal C',
    price: 15,
    orderCount: 3,
    vendorId: 3,
    weekDays: ['Wednesday'],
    vegetarian: false,
    spicy: true,
    dishType: DishType.Pizza,
    description: 'Description C',
    mealType: 'Type C',
  },
];

const mockRatings: { [key: string]: number } = {
  '1': 2,
  '2': 3.5,
  '3': 4.5,
};

const mockGetRating = (mealId: string) => mockRatings[mealId] || Ratings.NOT_RATED;

describe('sortMeals', () => {
  it('should sort meals by popularity', () => {
    const sortedMeals = sortMeals({
      meals: mockMealsData,
      sortBy: SortTerm.POPULARITY,
      getRating: mockGetRating,
    });
    expect(sortedMeals.map((meal) => meal.id)).toEqual(['2', '1', '3']);
  });

  it('should sort meals by price', () => {
    const sortedMeals = sortMeals({
      meals: mockMealsData,
      sortBy: SortTerm.PRICE,
      getRating: mockGetRating,
    });
    expect(sortedMeals.map((meal) => meal.id)).toEqual(['1', '3', '2']);
  });

  it('should sort meals by rating', () => {
    const sortedMeals = sortMeals({
      meals: mockMealsData,
      sortBy: SortTerm.RATING,
      getRating: mockGetRating,
    });
    expect(sortedMeals.map((meal) => meal.id)).toEqual(['3', '2', '1']);
  });
});
