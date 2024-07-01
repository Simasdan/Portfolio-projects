import { Link, useLocation } from 'react-router-dom';
import styles from './navigation.module.scss';
import IconMenu from '../../assets/static/icons/icon_menu.svg?react';
import IconRestaurant from '../../assets/static/icons/icon_restaurant.svg?react';
import IconGrading from '../../assets/static/icons/icon_grading.svg?react';
import IconStar from '../../assets/static/icons/icon_star.svg?react';
import { NavigationItemId, RoutePath, NavigationItemTitle } from '../../types/navigationEnums';

interface NavigationItemProps {
  id: NavigationItemId;
  title: NavigationItemTitle;
  to: RoutePath;
  onClick: () => void;
}

export default function NavigationItem({ title, to, id, onClick }: NavigationItemProps) {
  const location = useLocation();
  const selected = to === location.pathname;

  let Icon: JSX.Element | null = null;

  switch (id) {
    case NavigationItemId.MENU:
      Icon = <IconMenu title="icon" />;
      break;
    case NavigationItemId.LUNCH:
      Icon = <IconRestaurant title="icon" />;
      break;
    case NavigationItemId.ORDERS:
      Icon = <IconGrading title="icon" />;
      break;
    case NavigationItemId.RATINGS:
      Icon = <IconStar title="icon" />;
      break;
    default:
      break;
  }

  return (
    <Link
      onClick={onClick}
      to={to}
      className={`${styles.navItem} ${selected ? styles['navItem--selected'] : ''}`}>
      <div className={styles.navTitle}>
        {Icon}
        <span>{title}</span>
      </div>
    </Link>
  );
}
