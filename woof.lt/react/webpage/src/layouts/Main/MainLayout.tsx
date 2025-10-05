import { Outlet } from 'react-router-dom';
import styles from './mainLayout.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../utils/ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <ScrollToTop/>
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default MainLayout