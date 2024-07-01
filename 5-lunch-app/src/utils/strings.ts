import { getCurrentWorkingWeek } from './dateUtils';

export const menuStrings: Record<string, string> = {
  lunchMenuPageTitle: 'Lunch Menu',
  lunchMenuPageSubtitle: `Lunch menu for the week of ${getCurrentWorkingWeek()}`,
  availableLunchPageTitle: 'Available Lunch',
  availableLunchPageSubtitle: 'Friday dishes that are up for grabs, from your colleagues.',
  yourOrdersPageTitle: 'Your Orders',
  yourOrdersPageSubtitle: `Week of ${getCurrentWorkingWeek()}`,
  ratingsPageTitle: 'Ratings',
  ratingsPageSubtitle: `Week of ${getCurrentWorkingWeek()}`,
};
