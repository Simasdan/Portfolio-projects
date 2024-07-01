// Use CASE:
// import { useState } from 'react';
// import Navigation from './components/navigation/Navigation';
// const [collapsed, setCollapsed] = useState(false);
// <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import { NavigationItemId, RoutePath, NavigationItemTitle } from '../../types/navigationEnums';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import LogoVertical from '../../assets/static/logo/logo_vertical.svg?react';
import BurgerIcon from '../../assets/static/icons/icon_hamburger.svg?react';
import CloseIcon from '../../assets/static/icons/icon_close.svg?react';
import IconButton, { IconButtonSize, IconButtonType } from '../IconButton/IconButton';

interface NavigationProps {
  collapsed: boolean;
  setCollapsed: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export default function Navigation({ collapsed, setCollapsed }: NavigationProps) {
  const [closed, setClosed] = useState(true);

  return (
    <aside
      className={`${styles.sidebar} ${collapsed ? styles['sidebar--collapsed'] : ''} ${closed ? styles['sidebar--navClosed'] : ''}`}>
      <div
        className={`${styles.sidebarToggle} ${collapsed ? styles['sidebarToggle--collapsed'] : styles['sidebarToggle--expanded']}`}>
        <IconButton
          onClick={() => setCollapsed((prev) => !prev)}
          size={IconButtonSize.SMALL}
          type={IconButtonType.ACCENT}
        />
      </div>

      <nav className={styles.nav}>
        <Link to={RoutePath.MENU} className={styles.navLogo}>
          {collapsed ? (
            <LogoVertical className={styles.logo} title="logo" />
          ) : (
            <LogoHorizontal className={styles.logo} title="logo" />
          )}
        </Link>

        <div className={`${styles.navBurger} ${collapsed ? styles.navBurgerCollapsed : ''}`}>
          {closed ? (
            <BurgerIcon
              onClick={() => {
                setCollapsed(false);
                setClosed((prev) => !prev);
              }}
              className={styles.iconBurger}
            />
          ) : (
            <CloseIcon onClick={() => setClosed((prev) => !prev)} className={styles.iconBurger} />
          )}
        </div>

        <ul
          className={`${styles.navList} ${collapsed ? styles['sidebar__navList--collapsed'] : ''} ${closed ? styles['sidebar__navList--closed'] : ''}`}>
          <li>
            <NavigationItem
              onClick={() => setClosed(true)}
              id={NavigationItemId.MENU}
              title={NavigationItemTitle.MENU}
              to={RoutePath.MENU}
            />
          </li>
          <li>
            <NavigationItem
              onClick={() => setClosed(true)}
              id={NavigationItemId.LUNCH}
              title={NavigationItemTitle.LUNCH}
              to={RoutePath.LUNCH}
            />
          </li>
          <li>
            <NavigationItem
              onClick={() => setClosed(true)}
              id={NavigationItemId.ORDERS}
              title={NavigationItemTitle.ORDERS}
              to={RoutePath.ORDERS}
            />
          </li>
          <li>
            <NavigationItem
              onClick={() => setClosed(true)}
              id={NavigationItemId.RATINGS}
              title={NavigationItemTitle.RATINGS}
              to={RoutePath.RATINGS}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
