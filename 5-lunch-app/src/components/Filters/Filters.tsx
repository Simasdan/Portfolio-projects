import { ChangeEvent, useState } from 'react';
import { Input } from '../Input/Input';
import styles from './filters.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonType } from '../RegularButton/Button';
import ReusableDropdown, { DropdownItem } from './ReusableDropdown';

export enum SortTerm {
  POPULARITY = 'popularity',
  PRICE = 'price',
  RATING = 'rating',
}

interface FiltersProps {
  sort?: boolean;
  onSearchButtonClick: (searchTerm: string, selectedVendor: number | null) => void;
  onVendorSelect: (vendor: number | null) => void;
  dropdownData: DropdownItem[];
  selectedVendor: number | null;
  clearFiltersButton: boolean;
  onClearFiltersButtonClick: () => void;
  onSortChange: (sortBy: SortTerm) => void;
  selectedSort: SortTerm;
}

function Filters({
  sort = true,
  onSearchButtonClick,
  onVendorSelect,
  dropdownData,
  selectedVendor,
  clearFiltersButton = false,
  onClearFiltersButtonClick,
  onSortChange,
  selectedSort,
}: FiltersProps) {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchButtonClick(searchInput, selectedVendor);
  };

  const handleSelect = (vendorId: number | null) => {
    onVendorSelect(vendorId);
  };

  const handleClearFiltersButtonClick = () => {
    onClearFiltersButtonClick();
    setSearchInput('');
  };

  const handleSortChange = (sortBy: SortTerm) => {
    onSortChange(sortBy);
  };

  return (
    <div className={styles.filtersLayout}>
      <form onSubmit={formHandler}>
        <div className={styles.filters}>
          <div className={styles.filtersWrapper}>
            <Input
              label="What dish are you looking for?"
              name="dishInput"
              id="dishInput"
              placeholder="Enter a dish"
              icon
              value={searchInput}
              onChange={handleSearchInput}
            />
            <ReusableDropdown
              id="vendors"
              label="Vendor"
              title="All vendors"
              data={dropdownData}
              selectedId={selectedVendor ?? undefined}
              onSelect={handleSelect}
            />
          </div>
          <div className={styles.filterButtonWrapper}>
            {clearFiltersButton && (
              <Button
                text="Clear filters"
                appearance={ButtonAppearance.SECONDARY}
                size={ButtonSize.MEDIUM}
                onClick={handleClearFiltersButtonClick}
                buttonType={ButtonType.BUTTON}
              />
            )}
            <Button
              text="Search"
              appearance={ButtonAppearance.PRIMARY}
              size={ButtonSize.MEDIUM}
              onClick={() => onSearchButtonClick(searchInput, selectedVendor)}
              buttonType={ButtonType.SUBMIT}
            />
          </div>
        </div>
      </form>
      {sort && <div className={styles.seperator} />}
      {sort && (
        <div className={styles.sort}>
          <p className={styles.title}>Sort by</p>
          <Button
            text="POPULARITY"
            appearance={
              selectedSort === SortTerm.POPULARITY
                ? ButtonAppearance.SECONDARY
                : ButtonAppearance.TERTIARY
            }
            size={ButtonSize.XSMALL}
            onClick={() => handleSortChange(SortTerm.POPULARITY)}
            buttonType={ButtonType.SUBMIT}
          />
          <Button
            text="PRICE"
            appearance={
              selectedSort === SortTerm.PRICE
                ? ButtonAppearance.SECONDARY
                : ButtonAppearance.TERTIARY
            }
            size={ButtonSize.XSMALL}
            onClick={() => handleSortChange(SortTerm.PRICE)}
            buttonType={ButtonType.SUBMIT}
          />
          <Button
            text="RATING"
            appearance={
              selectedSort === SortTerm.RATING
                ? ButtonAppearance.SECONDARY
                : ButtonAppearance.TERTIARY
            }
            size={ButtonSize.XSMALL}
            onClick={() => handleSortChange(SortTerm.RATING)}
            buttonType={ButtonType.SUBMIT}
          />
        </div>
      )}
    </div>
  );
}

export default Filters;
