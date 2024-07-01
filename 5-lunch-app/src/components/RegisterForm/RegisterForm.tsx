import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './registerForm.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonType } from '../RegularButton/Button';
import { Input } from '../Input/Input';
import Checkmark from '../Checkmark/Checkmark';
import Dialog, { DialogSize } from '../Dialog/Dialog';
import {
  validateEmail,
  validatePassword,
  validateRepeatPassword,
  validateUniqueEmail,
  validateUsername,
} from '../../utils/validationUtils';
import useFetch from '../../api/useDataFetching';
import { UserData, createUserData } from '../../api/apiModel';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';
import { RoutePath } from '../../types/navigationEnums';
import { Endpoint } from '../../api/endpoints';
import usePost from '../../api/useDataPosting';
import ToastNotification, {
  ToastRefObject,
} from '../Notifications/ToastNotification/ToastNotification';
import { NotificationType } from '../../utils/notificationUtils';

enum FieldName {
  EMAIL = 'email',
  USERNAME = 'username',
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'repeatPassword',
}

function getId(data: UserData[]) {
  const maxId = Math.max(...data.map((item) => parseInt(item.id, 10)));
  return (maxId + 1).toString();
}

function RegisterForm() {
  const navigate = useNavigate();
  const toastRef = useRef<ToastRefObject>(null);
  const [showDialog, setShowDialog] = useState(false);

  const [fields, setFields] = useState({
    [FieldName.EMAIL]: { value: '', error: '' },
    [FieldName.USERNAME]: { value: '', error: '' },
    [FieldName.PASSWORD]: { value: '', error: '' },
    [FieldName.REPEAT_PASSWORD]: { value: '', error: '' },
  });

  const [isChecked, setIsChecked] = useState(false);
  const [checkmarkError, setCheckmarkError] = useState(false);

  const { data: existingUsers, error: fetchError } = useFetch<UserData[]>(Endpoint.USERS);
  const { responseData, error: postError, postData } = usePost<UserData>(Endpoint.USERS);

  const showNotification = () => {
    toastRef.current!.showToast(
      'There was an error creating your account. Pleasy try again.',
      NotificationType.WARNING
    );
  };

  useEffect(() => {
    if (responseData) {
      const token = JSON.stringify({
        email: responseData.email,
        id: responseData.id,
      });

      sessionStorage.setItem(SessionStorageKeys.TOKEN, token);
      navigate(RoutePath.MENU);
    }
  }, [responseData]);

  useEffect(() => {
    if (!postError) return;
    showNotification();
  }, [postError]);

  const validateField = (fieldName: FieldName, value: string) => {
    let error = '';

    switch (fieldName) {
      case FieldName.EMAIL:
        error = validateEmail(value);
        break;
      case FieldName.USERNAME:
        error = validateUsername(value);
        break;
      case FieldName.PASSWORD:
        error = validatePassword(value);
        break;
      case FieldName.REPEAT_PASSWORD:
        error = validateRepeatPassword(value, fields.password.value);
        break;
      default:
        break;
    }

    setFields({ ...fields, [fieldName]: { ...fields[fieldName], error } });

    if (error) return false;
    return true;
  };

  const isFormValid = (): boolean => {
    if (!isChecked) setCheckmarkError(true);

    if (
      !validateField(FieldName.EMAIL, fields.email.value) ||
      !validateField(FieldName.USERNAME, fields.username.value) ||
      !validateField(FieldName.PASSWORD, fields.password.value) ||
      !validateField(FieldName.REPEAT_PASSWORD, fields.repeatPassword.value) ||
      !isChecked
    )
      return false;

    if (fetchError) {
      showNotification();
      return false;
    }

    const error = validateUniqueEmail(fields.email.value, existingUsers!);
    if (error) {
      setFields({ ...fields, [FieldName.EMAIL]: { ...fields[FieldName.EMAIL], error } });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) return;

    const nextId = getId(existingUsers!);
    const userData = createUserData(
      nextId,
      fields.username.value,
      fields.email.value,
      fields.password.value
    );

    postData(userData);
  };

  const handleChange = (fieldName: FieldName, value: string) =>
    setFields({ ...fields, [fieldName]: { ...fields[fieldName], value } });

  const handleBlur = (fieldName: FieldName) => validateField(fieldName, fields[fieldName].value);

  const hasError = (fieldName: FieldName): boolean => fields[fieldName].error !== '';

  return (
    <>
      <ToastNotification toastRef={toastRef} />

      {showDialog && (
        <Dialog
          title="Community rules"
          size={DialogSize.LARGE}
          primaryButtonText="Close"
          onPrimaryButtonClick={() => setShowDialog(false)}
          onClose={() => setShowDialog(false)}>
          <>
            <span>
              Cognizant Technology Solutions Corporation and its affiliated companies (“Cognizant”
              “we” or “us”) are firmly committed to protecting your privacy. You should understand
              what we do with data relating to you (“personal information”) which we collect when
              you visit this website (cognizant.com), our country-specific sites or any other
              websites to which this Cognizant Website Privacy Notice (“Privacy Notice”) applies
              (collectively, the “Sites”). As a global company, Cognizant has a number of legal
              entities in different jurisdictions which are responsible for the personal information
              which they collect independently and which may be processed on their behalf by
              Cognizant Technology Solutions U.S. Corporation and its affiliates. The data
              controller for personal information collected from a visitor to the Sites is Cognizant
              Technology Solutions U.S. Corporation, 211 Quality Circle, College Station, Texas,
              United States of America or the affiliate specified on the Site that references this
              Privacy Notice.
            </span>
            <br />
            <br />
            <span>
              We may supplement this Privacy Notice to address specific situations. All supplemental
              notices should be read together with this Privacy Notice.
            </span>
          </>
        </Dialog>
      )}

      <div className={styles.registerFormWrapper}>
        <header className={styles.registerFormHeader}>
          <h1 className={styles.title}>Register</h1>
          <p className={styles.subtitle}>Join our office foodies today!</p>
        </header>
        <div className={styles.registerFormBody}>
          <form onSubmit={handleSubmit} className={styles.registerForm} noValidate>
            <div className={styles.formInputWrap}>
              <div className={styles.inputWrapper}>
                <Input
                  value={fields.email.value}
                  onChange={(e) => handleChange(FieldName.EMAIL, e.target.value)}
                  error={hasError(FieldName.EMAIL)}
                  errorText={fields.email.error}
                  label="Your email"
                  name="Email"
                  type="email"
                  placeholder="example@gmail.com"
                  onBlur={() => handleBlur(FieldName.EMAIL)}
                />
                <Input
                  value={fields.username.value}
                  onChange={(e) => handleChange(FieldName.USERNAME, e.target.value)}
                  error={hasError(FieldName.USERNAME)}
                  errorText={fields.username.error}
                  label="Create user name"
                  name="Username"
                  type="text"
                  placeholder="Username"
                  onBlur={() => handleBlur(FieldName.USERNAME)}
                />
                <Input
                  value={fields.password.value}
                  onChange={(e) => handleChange(FieldName.PASSWORD, e.target.value)}
                  error={hasError(FieldName.PASSWORD)}
                  errorText={fields.password.error}
                  label="Create password"
                  name="Password"
                  type="password"
                  placeholder="••••••••••"
                  onBlur={() => handleBlur(FieldName.PASSWORD)}
                />
                <Input
                  value={fields.repeatPassword.value}
                  onChange={(e) => handleChange(FieldName.REPEAT_PASSWORD, e.target.value)}
                  error={hasError(FieldName.REPEAT_PASSWORD)}
                  errorText={fields.repeatPassword.error}
                  label="Repeat password"
                  name="RepeatPassword"
                  type="password"
                  placeholder="••••••••••"
                  onBlur={() => handleBlur(FieldName.REPEAT_PASSWORD)}
                />
              </div>
              <div className={styles.communityRulesContainer}>
                <Checkmark
                  error={checkmarkError}
                  label="I have read the"
                  id=""
                  onCheckChange={(checked) => {
                    setIsChecked(checked);
                    setCheckmarkError(!checked);
                  }}
                />
                <button
                  className={styles.communityRulesBtn}
                  type="button"
                  onClick={() => setShowDialog(true)}>
                  Community rules
                </button>
              </div>
            </div>
            <Button
              text="Create Account"
              appearance={ButtonAppearance.PRIMARY}
              size={ButtonSize.MEDIUM}
              buttonType={ButtonType.SUBMIT}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
