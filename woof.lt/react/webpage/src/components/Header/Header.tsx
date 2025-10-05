import styles from './header.module.scss';
import { useState } from 'react';
import AppStoreIcon from '../../assets/icons/appStoreLogo.svg?react';
import GooglePlayIcon from '../../assets/icons/googlePlayLogo.svg?react';
import MainModal from '../MainModal/MainModal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // GA4 coding
    const handleButtonClick = (platform: string) => {
        if (window.gtag) {
            window.gtag("event", "download_button_click", {
                event_category: "Button",
                event_label: platform,
            });
        }
        openModal();
    };
    // GA4 coding

    return (
        <>
            <header className={styles.headerWrapper}>
                <div className={styles.leftSideWrapper}>
                    <h1>Registruokite šuniuką kirpimui su Woof<span>.</span>lt</h1>
                    <h2>Jūsų mylimas keturkojis nusipelno išskirtinio dėmesio ir profesionalios priežiūros!</h2>
                    <div className={styles.appDownloadWrapper}>
                        <AppStoreIcon className={styles.appDownloadButton} onClick={() => handleButtonClick('App Store')}/>
                        <GooglePlayIcon className={styles.appDownloadButton} onClick={() => handleButtonClick('Google Play')}/>
                    </div>
                </div>
                <figure className={styles.rightSideWrapper}>
                    <img src='/assets/images/HeroImageWEBP.webp' alt="Woof Woof!"/>
                </figure>
            </header>

            {isModalOpen && <MainModal closeModal={closeModal} />}
        </>
    )
}

export default Header