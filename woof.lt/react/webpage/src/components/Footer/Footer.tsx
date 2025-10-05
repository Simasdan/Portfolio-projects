import styles from './footer.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { RoutePath } from '../../types/routes';
import WoofLogo from '../../assets/icons/WoofLogo.svg?react';
import WoofMobileLogo from '../../assets/icons/woofFooterLogoMobile.svg?react';
import InstagramLogo from '../../assets/icons/instagramLogo.svg?react';
import FacebookLogo from '../../assets/icons/facebookLogo.svg?react';
import TiktokLogo from '../../assets/icons/tiktokLogo.svg?react';
import YoutubeLogo from '../../assets/icons/youtubeLogo.svg?react';
import LinkedinLogo from '../../assets/icons/linkedinLogo.svg?react';
import LtLogo from '../../assets/icons/ltMobileLogo.svg?react';
import InstagramMobileLogo from '../../assets/icons/igMobileLogo.svg?react';
import FacebookMobileLogo from '../../assets/icons/facebookMobileLogo.svg?react';
import TiktokMobileLogo from '../../assets/icons/tiktokMobileLogo.svg?react';
import YoutubeMobileLogo from '../../assets/icons/youtubeMobileLogo.svg?react';
import LinkedinMobileLogo from '../../assets/icons/linkedinMobileLogo.svg?react';

const Footer = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname == path;

  const handleSocialMediaClick = (platform: string) => {
    if (window.gtag) {
      window.gtag("event", "social_media_click", {
        event_category: "Social Media",
        event_label: platform,
      });
    }
  };

  const handleMailButtonClick = () => {
    if (window.gtag) {
      window.gtag("event", "mail_button_click", {
        event_category: "Button",
        event_label: "Footer contact mail button",
      });
    }
  };

  return (
    <>
      <footer className={styles.footerWraper}>
        <div className={styles.footerLinkWrapper}>
          <Link to={RoutePath.ROOT} aria-label='Woof pagrindinis puslapis'><WoofLogo className={styles.WoofLogo} /></Link>
          <Link to={RoutePath.ABOUTUS} className={`${styles.footerLink} ${isActive(RoutePath.ABOUTUS) ? styles.activeLink : ''}`}> Apie mus</Link>
          <Link to={RoutePath.CONTACTS} className={`${styles.footerLink} ${isActive(RoutePath.CONTACTS) ? styles.activeLink : ''}`}>Kontaktai</Link>
        </div>

        <menu className={styles.socialIconWrapper}>
          <li><a href="https://www.facebook.com/woof.lt" target="_blank" rel="noopener noreferrer" aria-label='Instagram' onClick={() => handleSocialMediaClick('Instagram')}><InstagramLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label='Facebook' onClick={() => handleSocialMediaClick('Facebook')}><FacebookLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label='TikTok' onClick={() => handleSocialMediaClick('TikTok')}><TiktokLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label='YouTube' onClick={() => handleSocialMediaClick('Youtube')}><YoutubeLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn' onClick={() => handleSocialMediaClick('LinkedIn')}><LinkedinLogo aria-hidden="true"/></a></li>
        </menu>
      </footer>
      <footer className={styles.allRightsWrapper}>
        <p>
          © 2025 Woof.lt. Visos teisės saugomos.
        </p>
        <a href="mailto:labas@woof.lt" className={styles.email}>labas@woof.lt</a>
      </footer>
      <footer className={styles.mobileFooterWrapper}>
        <Link to={RoutePath.ABOUTUS} className={`${styles.footerLink} ${isActive(RoutePath.ABOUTUS) ? styles.activeLink : ''}`}> Apie mus</Link>
        <Link to={RoutePath.CONTACTS} className={`${styles.footerLink} ${isActive(RoutePath.CONTACTS) ? styles.activeLink : ''}`}>Kontaktai</Link>
        <menu className={styles.socialIconWrapper}>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label='Instagram' onClick={() => handleSocialMediaClick('Instagram')}><InstagramMobileLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label='Facebook' onClick={() => handleSocialMediaClick('Facebook')}><FacebookMobileLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label='TikTok' onClick={() => handleSocialMediaClick('TikTok')}><TiktokMobileLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label='YouTube' onClick={() => handleSocialMediaClick('Youtube')}><YoutubeMobileLogo aria-hidden="true"/></a></li>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn' onClick={() => handleSocialMediaClick('LinkedIn')}><LinkedinMobileLogo aria-hidden="true"/></a></li>
        </menu>
        <Link to={RoutePath.ROOT} aria-label='Woof pagrindinis puslapis'><WoofMobileLogo className={styles.WoofLogo} /></Link>
        <a href="mailto:labas@woof.lt" className={styles.email} onClick={handleMailButtonClick}>labas@woof.lt</a>
        <div className={styles.languageWrapper}>
          <h4>LT</h4>
          <LtLogo />
        </div>
        <p className={styles.allRightsText}>
          © 2025 Woof.lt. Visos teisės saugomos.
        </p>
      </footer>
    </>
  )
}

export default Footer