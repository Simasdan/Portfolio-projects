import { useState, useEffect } from 'react';
import Dialog, { DialogIcon } from '../../components/Dialog/Dialog';
import FoodCardsLayout from './FoodCardsLayout';
import { STOP_ORDERS_HOUR, isWorkday } from '../../utils/dateUtils';
import Header from '../../components/Header/Header';

export default function FoodMenuPage() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const now = new Date();
    const stopOrdersDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      STOP_ORDERS_HOUR,
      0,
      0
    );

    if (isWorkday() && now < stopOrdersDate) {
      const timeUntilStopOrders = stopOrdersDate.getTime() - now.getTime();
      const timer = setTimeout(() => {
        setShowDialog(true);
      }, timeUntilStopOrders);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  return (
    <div>
      <Header page="lunchMenu" />
      {showDialog && (
        <Dialog
          title="Please refresh page"
          icon={DialogIcon.WARNING}
          primaryButtonText="Refresh"
          onClose={() => setShowDialog(false)}
          onPrimaryButtonClick={() => window.location.reload()}
          isCloseButtonVisible={false}>
          <span>Time to order for today is over.</span>
        </Dialog>
      )}
      <FoodCardsLayout />
    </div>
  );
}
