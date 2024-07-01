import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './mainLayout.module.scss';
import '../../styles/index.scss';
import Navigation from '../../components/Navigation/Navigation';
import UserProfile from '../../components/UserProfile/UserProfile';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import AccountIcon from '../../assets/static/icons/icon_account.svg?react';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import OrderSummaryContextWrapper from '../../components/OrderSummary/OrderSummaryContextWrapper';
import ProfileCardMobile from '../../components/ProfileCardMobile/ProfileCardMobile';

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [cartExpanded, setCartExpanded] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProfileClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
      <LogoHorizontal className={styles.logo} title="logo" />
      <header className={styles.headerLine}>
        <AccountIcon
          className={styles.account}
          title="Account information"
          onClick={handleProfileClick}
        />
      </header>
      <OrderSummaryContextWrapper cartExpanded={cartExpanded} setCartExpanded={setCartExpanded}>
        <aside className={styles.rightSide}>
          <article className={styles.userProfile}>
            <UserProfile />
          </article>

          <article className={styles.order}>
            <OrderSummary />
          </article>
        </aside>
        <main
          className={`${collapsed ? styles['content--collapsed'] : styles.content} ${cartExpanded ? styles['content--cartExpanded'] : styles.content}`}>
          <div className={styles.pageContent}>
            <Outlet />
            {/* <Outlet> allows to render 'child route' elements, so components can be placed on page  */}
          </div>
        </main>

        <footer className={`${styles.footer} ${collapsed ? styles['footer--collapsed'] : ''}`}>
          <Footer />
        </footer>
        <ProfileCardMobile isOpen={isModalOpen} onClose={handleCloseModal} />
      </OrderSummaryContextWrapper>
    </div>
  );
}
