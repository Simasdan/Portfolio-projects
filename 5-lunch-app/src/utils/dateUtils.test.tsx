import { getCurrentWorkingWeek, getCurrentYear } from './dateUtils';

// Use command "npm test dateUtils.test.tsx" or "npx jest dateUtils.test.tsx" to run these tests
describe('Date utility functions tests', () => {
  describe('getCurrentWorkingWeek', () => {
    it('should return the correct working week string for the current week', () => {
      const mockedDate = new Date('2024-04-05');
      expect(getCurrentWorkingWeek(mockedDate)).toEqual('Apr 1 - 5');
    });

    it('should return the correct working week string for the next week', () => {
      const mockedDate = new Date('2024-04-10');
      expect(getCurrentWorkingWeek(mockedDate)).toEqual('Apr 8 - 12');
    });

    it('should handle the case when the day falls on a weekend', () => {
      const mockedDate = new Date('2024-04-14');
      expect(getCurrentWorkingWeek(mockedDate)).toEqual('Apr 8 - 12');
    });

    it('should handle the case when the week falls in between two months', () => {
      const mockedDate = new Date('2024-04-29');
      expect(getCurrentWorkingWeek(mockedDate)).toEqual('Apr 29 - May 3');
    });

    it('should handle leap years correctly', () => {
      const mockedDate = new Date('2024-02-29');
      expect(getCurrentWorkingWeek(mockedDate)).toEqual('Feb 26 - Mar 1');
    });
  });

  describe('getCurrentYear', () => {
    it('should return the current year as a string', () => {
      const actualYear = new Date().getFullYear().toString();
      expect(getCurrentYear()).toEqual(actualYear);
    });
  });
});
