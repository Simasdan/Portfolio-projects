export const STOP_ORDERS_HOUR = 11;

export function getCurrentWorkingWeek(today?: Date): string {
  if (!today) {
    today = new Date();
  }
  const mondayDate: Date = new Date(
    today.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1))
  );
  const fridayDate: Date = new Date(today.setDate(mondayDate.getDate() + 4));

  const mondayMonth: string = mondayDate.toLocaleString('en-us', { month: 'short' });
  const mondayDay: number = mondayDate.getDate();

  const fridayMonth: string = fridayDate.toLocaleString('en-us', { month: 'short' });
  const fridayDay: number = fridayDate.getDate();

  return mondayMonth === fridayMonth
    ? `${mondayMonth} ${mondayDay} - ${fridayDay}`
    : `${mondayMonth} ${mondayDay} - ${fridayMonth} ${fridayDay}`;
}

export function getCurrentWeekdayName(): string {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' });
}

export function isWorkday(): boolean {
  return ![0, 6].includes(new Date().getDay());
}

export function getCurrentYear(): string {
  const currentYear = new Date().getFullYear();
  return currentYear.toString();
}
