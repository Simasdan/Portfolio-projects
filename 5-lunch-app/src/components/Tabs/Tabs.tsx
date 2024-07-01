import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TabButton from './TabButton';
import styles from './tabs.module.scss';

interface TabsProps {
  tabs: string[];
  onTabChange: (index: number) => void;
  disabledTabs?: number[];
  links?: string[];
  preselectedTab: number;
  isUppercase?: boolean;
}

function Tabs({
  tabs,
  onTabChange,
  disabledTabs = [],
  links = [],
  isUppercase,
  preselectedTab,
}: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(preselectedTab);

  useEffect(() => {
    setSelectedTab(preselectedTab);
  }, [preselectedTab]);

  const isTabDisabled = (index: number) => disabledTabs.includes(index);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    onTabChange(index);
  };

  return (
    <div className={styles.container}>
      <hr className={styles.separator} />
      <ul className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div key={tab}>
            {links && links[index] ? (
              <Link tabIndex={-1} to={links[index]}>
                <TabButton
                  text={isUppercase ? tab.toUpperCase() : tab}
                  onClick={() => handleTabClick(index)}
                  selected={index === selectedTab}
                  disabled={isTabDisabled(index)}
                />
              </Link>
            ) : (
              <TabButton
                text={isUppercase ? tab.toUpperCase() : tab}
                onClick={() => handleTabClick(index)}
                selected={index === selectedTab}
                disabled={isTabDisabled(index)}
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
