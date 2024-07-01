import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';

interface AuthTabsProps {
  preselectedTab: number;
}

function AuthTabs({ preselectedTab }: AuthTabsProps) {
  const authenticationTabs: { label: string; link: string }[] = [
    { label: 'Login', link: '/login' },
    { label: 'Register', link: '/register' },
  ];

  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<number>(preselectedTab);

  useEffect(() => {
    const currentTab = authenticationTabs.findIndex((tab) => location.pathname === tab.link);
    if (currentTab !== -1) {
      setSelectedTab(currentTab);
    }
  }, [location.pathname, authenticationTabs]);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Tabs
      tabs={authenticationTabs.map((tab) => tab.label)}
      links={authenticationTabs.map((tab) => tab.link)}
      onTabChange={handleTabChange}
      preselectedTab={selectedTab}
      isUppercase
    />
  );
}

export default AuthTabs;
