import { MealData } from '../api/apiModel';
import { SortTerm } from '../components/Filters/Filters';

export enum Ratings {
  NOT_RATED = 'Not rated',
}

interface SortMealsProps {
  meals: MealData[];
  sortBy: SortTerm;
  getRating: (mealId: string) => number | Ratings.NOT_RATED;
}

export const sortMeals = ({ meals, sortBy, getRating }: SortMealsProps): MealData[] => {
  const sortedMeals = [...meals];

  switch (sortBy) {
    case SortTerm.POPULARITY:
      sortedMeals.sort((a, b) => b.orderCount - a.orderCount);
      break;
    case SortTerm.PRICE:
      sortedMeals.sort((a, b) => a.price - b.price);
      break;
    case SortTerm.RATING:
      sortedMeals.sort((a, b) => {
        const ratingA: number | Ratings.NOT_RATED = getRating(a.id);
        const ratingB: number | Ratings.NOT_RATED = getRating(b.id);

        if (ratingA === Ratings.NOT_RATED && ratingB === Ratings.NOT_RATED) return 0;
        if (ratingA === Ratings.NOT_RATED) return 1;
        if (ratingB === Ratings.NOT_RATED) return -1;
        return ratingB - ratingA;
      });
      break;
    default:
      sortedMeals.sort((a, b) => b.orderCount - a.orderCount);
      break;
  }

  return sortedMeals;
};
