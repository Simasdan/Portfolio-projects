import { useState, useEffect } from 'react';
import Dialog, { DialogIcon, DialogSize } from '../../components/Dialog/Dialog';
import FoodCardsLayout from './FoodCardsLayout';
import { STOP_ORDERS_HOUR, isWorkday } from '../../utils/dateUtils';
import Header from '../../components/Header/Header';

export default function FoodMenuPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false)

  useEffect(() => {
    setShowInfoDialog(true)

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
      {
        showInfoDialog && (
          <Dialog
            title='Information about meals'
            size={DialogSize.LARGE}
            primaryButtonText="Okay!"
            onPrimaryButtonClick={() => setShowInfoDialog(false)}
            onClose={() => setShowInfoDialog(false)}
            children={(
              <>
                <p>
                  <span>
                    Upon logging in, you will be redirected to the meals page. This page showcases all available meals for ordering and <b>has a few additional edge cases</b>:
                  </span>
                  <br />
                  <span>
                    1. Since lunch is around 12 PM, this app allows meal orders until 11 AM on the current day. After 11 AM, a modal will appear providing necessary information and prompting you to refresh the page. Once refreshed, meals for the current day will no longer be displayed. Additionally, previous day tabs will be disabled. However, you can still switch to upcoming days (e.g., if you check on Tuesday at 1 PM, Monday and Tuesday tabs will be unavailable).
                  </span>
                  <br />
                  <span>
                    2. On Fridays, meals are free, as lunch is paid for by the company. However, on Fridays, you can only order one side and one main dish.
                  </span>
                </p>
              </>
            )}
          />
        )
      }
    </div>
  );
}
