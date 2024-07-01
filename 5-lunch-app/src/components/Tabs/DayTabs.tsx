import { getCurrentWeekdayName } from '../../utils/dateUtils';
import Tabs from './Tabs';
import useResizeDetector from '../../utils/useResizeDetector';

// USAGE
// const handleTabChange = (day: string) => {
//   console.log('Selected day :', day);
// };
// <DayTabs onTabChange={handleTabChange}/>

interface DayTabsProps {
  onTabChange: (day: string) => void;
}

function DayTabs({ onTabChange }: DayTabsProps) {
  const workdaysLong = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const workdaysShort = workdaysLong.map((day) => day.slice(0, 3));

  const { isTabletLandscape } = useResizeDetector();

  const currentDayIndex = workdaysLong.indexOf(getCurrentWeekdayName());

  const disabledTabs =
    currentDayIndex !== -1
      ? Array.from({ length: currentDayIndex }, (_, i) => i)
      : Array.from({ length: 5 }, (_, i) => i);

  const handleTabChange = (index: number) => {
    onTabChange(workdaysLong[index]);
  };

  return (
    <Tabs
      tabs={isTabletLandscape ? workdaysShort : workdaysLong}
      onTabChange={handleTabChange}
      preselectedTab={currentDayIndex}
      disabledTabs={disabledTabs}
    />
  );
}

export default DayTabs;
