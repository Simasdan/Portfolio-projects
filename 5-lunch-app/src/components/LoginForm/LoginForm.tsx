import { FormEvent, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input/Input';
import {
  Button,
  ButtonAppearance,
  ButtonSize,
  ButtonIcon,
  ButtonType,
} from '../RegularButton/Button';
import styles from './loginForm.module.scss';
import useFetch from '../../api/useDataFetching';
import { LoginUserData } from '../../api/apiModel';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';
import { RoutePath } from '../../types/navigationEnums';
import ToastNotification, {
  ToastRefObject,
} from '../Notifications/ToastNotification/ToastNotification';
import { NotificationType } from '../../utils/notificationUtils';
import { Endpoint } from '../../api/endpoints';
import Dialog from '../Dialog/Dialog';

interface LoginUser {
  email: string;
  password: string;
}

function LoginForm() {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [dialogEmailInput, setDialogEmailInput] = useState<string>('');
  const navigate = useNavigate();
  const toastRef = useRef<ToastRefObject>(null);
  const [showDialog, setShowDialog] = useState(false);

  const { data } = useFetch<LoginUserData[]>(Endpoint.USERS);

  const showNotification = (errorText: string, type = NotificationType.WARNING) => {
    if (toastRef.current) {
      toastRef.current.showToast(errorText, type);
    }
  };

  const showPassword = () => {
    setShowDialog(false);

    const userPassword = data?.find((user) => user.email === dialogEmailInput)?.password;

    if (userPassword) {
      showNotification(
        `Your password is ${userPassword}! Repeat until you remember it.`,
        NotificationType.SUCCESS
      );
    } else {
      showNotification(
        `We could not find an account with this email. Please register.`,
        NotificationType.INFO
      );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginUser: LoginUser = {
      email: emailInput,
      password: passwordInput,
    };

    try {
      if (!data) {
        showNotification('No data from database was received');
        return;
      }

      const existingUser = data.find(
        (user) => user.email === loginUser.email && user.password === loginUser.password
      );

      if (existingUser) {
        const token = JSON.stringify({
          email: existingUser.email,
          id: existingUser.id,
        });
        sessionStorage.setItem(SessionStorageKeys.TOKEN, token);
        navigate(RoutePath.MENU);
      } else {
        showNotification('Email or password You have provided are incorrect. Please try again.');
      }
    } catch (fetchError) {
      showNotification('Error fetching data');
    }

    setEmailInput('');
    setPasswordInput('');
  };

  return (
    <>
      {showDialog && (
        <Dialog
          title="Reset your password"
          primaryButtonText="Send recovery link"
          secondaryButton
          secondaryButtonText="Return to log in"
          onSecondaryButtonClick={() => setShowDialog(false)}
          onClose={() => setShowDialog(false)}
          onPrimaryButtonClick={showPassword}>
          <>
            <span>
              Enter your email address, and we&apos;ll send you a link to get back into your
              account.
            </span>
            <div className={styles.resetPasswordInput}>
              <Input
                value={dialogEmailInput}
                onChange={(e) => {
                  setDialogEmailInput(e.target.value);
                }}
                label="Email address"
                placeholder="example@gmail.com"
                name="dialogEmail"
              />
            </div>
          </>
        </Dialog>
      )}
      <div className={styles.loginFormWrapper}>
        <header className={styles.loginFormHeader}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.subtitle}>Lunch won’t order itself</p>
        </header>
        <div className={styles.loginFormBody}>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formInputWrap}>
              <div className={styles.inputWrapper}>
                <Input
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                  }}
                  label="Email"
                  name="Email"
                  type="email"
                  placeholder="example@gmail.com"
                />
                <Input
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                  }}
                  label="Password"
                  name="Password"
                  type="password"
                />
              </div>
              <div className={styles.forgotPassword}>
                <button
                  className={styles.forgotPasswordBtn}
                  type="button"
                  onClick={() => setShowDialog(true)}>
                  Forgot Password?
                </button>
              </div>
            </div>
            <Button
              text="Log In"
              appearance={ButtonAppearance.PRIMARY}
              size={ButtonSize.MEDIUM}
              icon={ButtonIcon.ARROW}
              buttonType={ButtonType.SUBMIT}
            />
          </form>
        </div>
      </div>
      <ToastNotification toastRef={toastRef} />
    </>
  );
}

export default LoginForm;
