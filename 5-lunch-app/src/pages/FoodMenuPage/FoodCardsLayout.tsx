import { useState, useEffect, useContext } from 'react';
import useFetch from '../../api/useDataFetching';
import FoodCard from '../../components/FoodCard/FoodCard';
import DayTabs from '../../components/Tabs/DayTabs';
import styles from './foodMenuPage.module.scss';
import { MealData, RatingData, VendorData } from '../../api/apiModel';
import {
  NotificationType,
  StaticNotification,
} from '../../components/Notifications/StaticNotification/StaticNotification';
import { STOP_ORDERS_HOUR, getCurrentWeekdayName } from '../../utils/dateUtils';
import Filters, { SortTerm } from '../../components/Filters/Filters';
import cartContext from '../../components/OrderSummary/cartContext';
import { Endpoint } from '../../api/endpoints';

enum Ratings {
  NOT_RATED = 'Not rated',
}

function FoodCardsLayout() {
  const cart = useContext(cartContext);

  const [filteredMeals, setFilteredMeals] = useState<MealData[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>(getCurrentWeekdayName());
  const [selectedVendorState, setSelectedVendorState] = useState<number | null>(null);
  const [showClearFiltersButton, setShowClearFiltersButton] = useState(false);
  const [sortBy, setSortBy] = useState<SortTerm>(SortTerm.POPULARITY);

  const { data: mealData, loading, error } = useFetch<MealData[]>(Endpoint.MEALS);
  const { data: vendorData } = useFetch<VendorData[]>(Endpoint.VENDORS);
  const { data: ratingData } = useFetch<RatingData[]>(Endpoint.RATINGS);

  const getRating = (mealId: string): number | Ratings.NOT_RATED => {
    const ratings = ratingData?.filter((item) => item.mealId.toString() === mealId);

    if (!ratings || !ratings.length) return Ratings.NOT_RATED;

    const totalRating = ratings.reduce((acc, curr) => acc + curr.rating.rating, 0);
    const averageTotalRating = totalRating / ratings.length;
    return averageTotalRating || Ratings.NOT_RATED;
  };

  const filterMeals = (searchTerm: string, vendorId: number | null) => {
    let updateFilteredMeals = mealData || [];

    updateFilteredMeals = updateFilteredMeals.filter((meal) => meal.weekDays.includes(selectedDay));

    if (vendorId !== null) {
      updateFilteredMeals = updateFilteredMeals.filter((meal) => meal.vendorId === vendorId);
    }

    if (searchTerm !== '') {
      updateFilteredMeals = updateFilteredMeals.filter((meal) =>
        meal.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortBy) {
      case SortTerm.POPULARITY:
        updateFilteredMeals.sort((a, b) => b.orderCount - a.orderCount);
        setSortBy(SortTerm.POPULARITY);
        break;
      case SortTerm.PRICE:
        updateFilteredMeals.sort((a, b) => a.price - b.price);
        setSortBy(SortTerm.PRICE);
        break;
      case SortTerm.RATING:
        updateFilteredMeals.sort((a, b) => {
          const ratingA: number | Ratings.NOT_RATED = getRating(a.id);
          const ratingB: number | Ratings.NOT_RATED = getRating(b.id);

          if (ratingA === Ratings.NOT_RATED && ratingB === Ratings.NOT_RATED) return 0;
          if (ratingA === Ratings.NOT_RATED) return 1;
          if (ratingB === Ratings.NOT_RATED) return -1;
          return ratingB - ratingA;
        });
        setSortBy(SortTerm.RATING);
        break;
      default:
        updateFilteredMeals.sort((a, b) => b.orderCount - a.orderCount);
        break;
    }

    setFilteredMeals(updateFilteredMeals);
  };

  const handleVendorSelect = (vendorId: number | null) => {
    setSelectedVendorState(vendorId);
  };

  const handleSearchButtonClick = (searchTerm: string, selectedVendor: number | null) => {
    filterMeals(searchTerm, selectedVendor);
    setShowClearFiltersButton(true);
  };

  useEffect(() => {
    filterMeals('', null);
  }, [mealData, selectedDay, sortBy]);

  const handleTabChange = (day: string) => {
    setSelectedDay(day);
  };

  const canOrder = () =>
    getCurrentWeekdayName() !== selectedDay || new Date().getHours() < STOP_ORDERS_HOUR;

  const getVendor = (vendorId: number) => {
    const vendor = vendorData?.find((item) => item.id === vendorId.toString());
    return vendor ? vendor.name : '';
  };

  const transformVendorData = (vendorsData: VendorData[] | null) =>
    vendorsData?.map((vendor) => ({ id: parseInt(vendor.id, 10), name: vendor.name })) || [];

  const handleClearFiltersButtonClick = () => {
    filterMeals('', null);
    setSelectedVendorState(null);
    setShowClearFiltersButton(false);
  };

  const handleSortChange = (sortyBy: SortTerm) => {
    setSortBy(sortyBy);
  };

  return (
    <>
      <DayTabs onTabChange={handleTabChange} />

      <Filters
        dropdownData={transformVendorData(vendorData)}
        onSearchButtonClick={handleSearchButtonClick}
        onVendorSelect={handleVendorSelect}
        selectedVendor={selectedVendorState}
        clearFiltersButton={showClearFiltersButton}
        onClearFiltersButtonClick={handleClearFiltersButtonClick}
        onSortChange={handleSortChange}
        selectedSort={sortBy}
      />

      <div className={styles.cardsContainer}>
        {loading && <StaticNotification text="Loading..." type={NotificationType.INFO} />}
        {error && (
          <StaticNotification text="Error getting meals." type={NotificationType.WARNING} />
        )}
        {!loading && !error && filteredMeals?.length === 0 && (
          <StaticNotification text="No dishes ready for today." type={NotificationType.INFO} />
        )}
        {!loading && !error && filteredMeals?.length !== 0 && !canOrder() && (
          <StaticNotification text="Orders no longer accepted." type={NotificationType.INFO} />
        )}
        {!loading && !error && canOrder() && (
          <div className={styles.mealContainer}>
            {filteredMeals.map((meal) => {
              const vendorName = getVendor(meal.vendorId);

              return (
                <FoodCard
                  key={meal.id}
                  id={meal.id}
                  vendor={vendorName}
                  title={meal.title}
                  description={meal.description}
                  price={meal.price}
                  picture={meal.dishType}
                  isVegetarian={meal.vegetarian}
                  isSpicy={meal.spicy}
                  rating={getRating(meal.id)}
                  weekday={selectedDay}
                  handleAddToCart={() => {
                    cart.addToCart({
                      meal: { ...meal, vendor: vendorName },
                      selectedDay,
                    });
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default FoodCardsLayout;
