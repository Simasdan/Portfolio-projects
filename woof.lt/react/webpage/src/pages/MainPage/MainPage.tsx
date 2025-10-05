import styles from './mainPage.module.scss';
import Header from '../../components/Header/Header';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import FindSpecialistSection from '../../components/FindSpecialistSection/FindSpecialistSection';
import GetAppSection from '../../components/GetAppSection/GetAppSection';
import YorkieSection from '../../components/YorkieSection/YorkieSection';
import FamilySection from '../../components/FamilySection/FamilySection';

const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Header/>
      <ServicesSection/>
      <ReviewsSection/>
      <FindSpecialistSection/>
      <GetAppSection/>
      <YorkieSection/>
      <FamilySection/>
    </div>
  )
}

export default MainPage