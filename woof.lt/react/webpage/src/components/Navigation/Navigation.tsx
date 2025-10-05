import styles from './navigation.module.scss';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RoutePath } from '../../types/routes';
import Button, { ButtonAppearance, ButtonPadding } from '../Button/Button';
import WoofLogo from '../../assets/icons/WoofLogo.svg?react';
import SalonamsLogo from '../../assets/icons/salonamsLogo.svg?react';
import LtLogo from '../../assets/icons/ltLogo.svg?react';
import BurgerLogo from '../../assets/icons/burgerLogo.svg?react';
import WoofLogoMobile from '../../assets/icons/woofLogoMobile.svg?react';
import SalonamsMobileLogo from '../../assets/icons/salonamsMobileLogo.svg?react';
import LtMobileLogo from '../../assets/icons/ltMobileLogo.svg?react';
import CloseIcon from '../../assets/icons/closeIcon.svg?react';
import MainModal from '../MainModal/MainModal';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const isActive = (path: string) => location.pathname == path;

  const handleBurgerToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // GA4 coding
  const handleLinkClick = (eventLabel: string) => {
    if (window.gtag) {
      window.gtag("event", "navigation_button_click", {
        event_category: "Navigation",
        event_label: eventLabel,
      });
    }
  };

  useEffect(() => {
    if (window.gtag) {
      // Enable Debug Mode
      window.gtag('config', 'G-R8TQK6SPYP', {
        'debug_mode': true
      });
    }
  }, []);
  // GA4 coding

  return (
    <>
      <div className={styles.navigationWrapper}>
        <nav className={styles.navigationLinkWrapper}>
          <Link to={RoutePath.ROOT} aria-label='Woof pagrindinis puslapis' onClick={() => handleLinkClick("Nav: Home Page")}><WoofLogo /></Link>
          <Link to={RoutePath.ABOUTUS} className={`${styles.navigationLink} ${isActive(RoutePath.ABOUTUS) ? styles.activeLink : ''}`} onClick={() => handleLinkClick("Nav: About Us Page")}> Apie mus</Link>
          <Link to={RoutePath.CONTACTS} className={`${styles.navigationLink} ${isActive(RoutePath.CONTACTS) ? styles.activeLink : ''}`} onClick={() => handleLinkClick("Nav: Contacts Page")}>Kontaktai</Link>
        </nav>
        <div className={styles.navigationRightSideWrapper}>
          <Link to={RoutePath.SALONS} aria-label='Woof Salonams puslapis' onClick={() => handleLinkClick("Nav: Salons Page")}><SalonamsLogo className={styles.salonamsLogo} /></Link>
          <div className={styles.languageWrapper}>
            <h4>LT</h4>
            <LtLogo />
          </div>
        </div>
      </div>

      <nav className={styles.mobileNavigationWrapper}>
        <Link to={RoutePath.ROOT} aria-label='Woof pagrindinis puslapis'><WoofLogoMobile /></Link>
        {menuOpen ? <CloseIcon onClick={handleCloseMenu} /> : <BurgerLogo onClick={handleBurgerToggle} />}
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileLinks}>
            <Link to={RoutePath.ROOT} aria-label='Woof pagrindinis puslapis' className={`${styles.mobileNavigationLink} ${isActive(RoutePath.ROOT) ? styles.activeLink : ''}`}  onClick={() => { handleLinkClick("Nav: Home Page"); handleCloseMenu()}}>Pagrindinis</Link>
            <Link to={RoutePath.ABOUTUS} className={`${styles.mobileNavigationLink} ${isActive(RoutePath.ABOUTUS) ? styles.activeLink : ''}`} onClick={() => { handleLinkClick("Nav: About Us Page"); handleCloseMenu()}}>Apie mus</Link>
            <Link to={RoutePath.CONTACTS} className={`${styles.mobileNavigationLink} ${isActive(RoutePath.CONTACTS) ? styles.activeLink : ''}`} onClick={() => { handleLinkClick("Nav: Contacts Page"); handleCloseMenu()}}>Kontaktai</Link>
            <Link to={RoutePath.SALONS} aria-label='Woof Salonams puslapis'><SalonamsMobileLogo className={styles.salonamsLogo} onClick={() => { handleLinkClick("Nav: Salons Page"); handleCloseMenu()}}/></Link>
          </nav>
          <div className={styles.languageWrapper}>
            <h4>LT</h4>
            <LtMobileLogo />
          </div>
        </div>
      )}

      <div className={styles.subscribeBar}>
        <h4>Gaukite naujienas pirmieji!</h4>
        <Button appearance={ButtonAppearance.WHITE} padding={ButtonPadding.SMALL} text='Prenumeruoti' onClick={openModal} trackingEvent="subscribe_bar_button_click" />
      </div>

      {isModalOpen && <MainModal closeModal={closeModal} />}
    </>
  )
}

export default Navigation