import { Outlet, useLocation } from 'react-router-dom';
import loginImage from '../../assets/static/login-screen-images/login-screen-image_light-orange-background.png';
import styles from './authenticationPage.module.scss';
import logo from '../../assets/static/logo/logo_horizontal.svg';
import AuthTabs from './AuthTabs';
import { RoutePath } from '../../types/navigationEnums';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import Dialog, { DialogSize } from '../../components/Dialog/Dialog';

function AuthenticationPage() {
  const location = useLocation();
  const preselectedTab = location.pathname === RoutePath.REGISTER ? 1 : 0;
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setShowDialog(true);
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.image} src={loginImage} alt="Two people thinking about food" />
        <div className={styles.loginForm}>
          <img className={styles.logo} src={logo} alt="Lunch App" />
          <div className={styles.tabs}>
            <AuthTabs preselectedTab={preselectedTab} />
          </div>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      {
        showDialog && (
          <Dialog
            title='Introduction to project'
            size={DialogSize.LARGE}
            primaryButtonText="Okay!"
            onPrimaryButtonClick={() => setShowDialog(false)}
            onClose={() => setShowDialog(false)}
            children={(
              <>
                <p>
                  <span>
                    This project is a lunch app featuring a front-end built with React and TypeScript, and a JSON server for data management. For testing purposes, a user account has been created on the server. You can log in using the following credentials:
                  </span>
                  <br />
                  <span><b>Login: frontender@gmail.com</b></span>
                  <br />
                  <span><b>Password: securepass123</b></span>
                  <br />
                  <span>Additionally, you can create a new user account via the registration tab.</span>
                  <br />
                  <span><b>For testing</b>, it is recommended to use the pre-existing user account as it has a pre-set balance for ordering meals.
                  </span>
                </p>
              </>
            )}
          />
        )
      }
    </div>
  );
}

export default AuthenticationPage;
