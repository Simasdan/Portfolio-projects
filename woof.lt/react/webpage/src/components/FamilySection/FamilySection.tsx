import styles from './familySection.module.scss';
import { useState } from 'react';
import AppStoreIcon from '../../assets/icons/appStoreLogo.svg?react';
import GooglePlayIcon from '../../assets/icons/googlePlayLogo.svg?react';
import MainModal from '../MainModal/MainModal';

const FamilySection = () => {
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
            window.gtag("event", "download_click", {
                event_category: "Button",
                event_label: platform,
            });
        }
        openModal();
    };
    // GA4 coding

    return (
        <>
            <section className={styles.familySectionWrapper}>
                <article className={styles.familySectionTextWrapper}>
                    <h6>Jūsų augintinis - tai jūsų <span>šeimos narys</span>,</h6>
                    <p>kuriam norite suteikti viską, kas geriausia. Woof.lt supranta šį ryšį. Mūsų platforma padeda jums rasti ne tik kvalifikuotus, bet ir rūpestingus specialistus, kurie elgsis su jūsų augintiniu kaip su savu.
                        <br />
                        <br />
                        Suteikite savo keturkojui draugui meilę ir priežiūrą, kurios jis nusipelno. Prisijunkite prie laimingų augintinių savininkų bendruomenės, kuri supaprastino augintinių priežiūros rutiną su Woof.
                    </p>
                </article>
                <article className={styles.familySectionDownloadWrapper}>
                    <h6>Dar neįsitikinote? Išbandykite ir pažadame, kad <span>nepasigailėsite</span>.</h6>
                    <div className={styles.downloadbuttonWrapper}>
                        <AppStoreIcon className={styles.appDownloadButton} onClick={() => handleButtonClick('App Store')} />
                        <GooglePlayIcon className={styles.appDownloadButton} onClick={() => handleButtonClick('Google Play')} />
                    </div>
                </article>
            </section>

            {isModalOpen && <MainModal closeModal={closeModal} />}
        </>
    )
}

export default FamilySection