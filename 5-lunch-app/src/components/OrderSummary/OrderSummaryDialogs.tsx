import Dialog, { DialogIcon } from '../Dialog/Dialog';

export enum OrderStatus {
  SUCCESS = 'success',
  NOT_ENOUGH_BALANCE = 'not_enough_balance',
  ERROR = 'error',
  FRIDAY_MEAL_ALREADY_BOOKED = 'Friday_already_booked',
}

export interface OrderSummaryDialogsProps {
  orderStatus: OrderStatus | null;
  setOrderStatus: (value: null | OrderStatus) => void;
  onClose: () => void;
}

export default function OrderSummaryDialogs({
  orderStatus,
  onClose,
  setOrderStatus,
}: OrderSummaryDialogsProps) {
  const handleClose = () => {
    setOrderStatus(null);
    onClose();
  };

  if (orderStatus === OrderStatus.SUCCESS) {
    return (
      <Dialog
        primaryButtonText="Cool, Thanks!"
        onClose={handleClose}
        title="We've got your lunch order!"
        icon={DialogIcon.SUCCESS}
        onPrimaryButtonClick={handleClose}
        isCloseButtonVisible>
        <p>Order has been placed successfully.</p>
        <p>
          You can view lunch for the week in <br />
          <b>Your Orders</b>
        </p>
      </Dialog>
    );
  }

  if (orderStatus === OrderStatus.NOT_ENOUGH_BALANCE) {
    return (
      <Dialog
        primaryButtonText="OK"
        onClose={handleClose}
        title="Not enough balance!"
        icon={DialogIcon.WARNING}
        onPrimaryButtonClick={handleClose}
        isCloseButtonVisible>
        <p>You do not have enough balance available to complete this order.</p>
      </Dialog>
    );
  }

  if (orderStatus === OrderStatus.ERROR) {
    return (
      <Dialog
        primaryButtonText="OK"
        onClose={handleClose}
        title="An error occured!"
        icon={DialogIcon.WARNING}
        onPrimaryButtonClick={handleClose}
        isCloseButtonVisible>
        This is on us. Sorry for the inconvenience.
      </Dialog>
    );
  }

  if (orderStatus === OrderStatus.FRIDAY_MEAL_ALREADY_BOOKED) {
    return (
      <Dialog
        primaryButtonText="OK"
        onClose={handleClose}
        title="Friday's meals are already booked! "
        icon={DialogIcon.WARNING}
        onPrimaryButtonClick={handleClose}
        isCloseButtonVisible>
        <p>
          Meals for Friday are already booked.
          <br />
          <b>Remove it from the basket</b>
        </p>
        <p>
          You can view lunch for the week in <br />
          <b>Your Orders</b>
        </p>
      </Dialog>
    );
  }
}
