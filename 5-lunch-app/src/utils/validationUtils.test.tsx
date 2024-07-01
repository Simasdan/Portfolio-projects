import { validateEmail, validatePassword, validateUsername } from './validationUtils';

describe('validateEmail', () => {
  it('should return empty error when email is valid', () => {
    const mockEmail = 'testas@gmail.com';
    expect(validateEmail(mockEmail)).toEqual('');
  });

  it('should return error when email is empty', () => {
    const mockEmail = '';
    expect(validateEmail(mockEmail)).toEqual('Please fill in the email field');
  });

  it('should return error when email is invalid', () => {
    const mockEmails = [
      'testasgmail.com', // missing '@'
      'test@.com', // missing domain name
      '@gmail.com', // missing local part
      'test@gmail', // missing top-level domain
    ];

    mockEmails.forEach((mockEmail) => {
      expect(validateEmail(mockEmail)).toEqual('Please enter a valid email address');
    });
  });
});

describe('validateUsername', () => {
  it('should return error when username is empty', () => {
    const mockUsername = '';
    expect(validateUsername(mockUsername)).toEqual('Please fill in the username field');
  });

  it('should return empty error when username is OK', () => {
    const mockUsername = 'testas';
    expect(validateUsername(mockUsername)).toEqual('');
  });
});

describe('validatePassword', () => {
  it('should return error when password is empty', () => {
    const mockPassword = '';
    expect(validatePassword(mockPassword)).toEqual('Please fill in the password field');
  });

  it('should return error when password is too short', () => {
    const mockPassword = 'abcd';
    expect(validatePassword(mockPassword)).toEqual('Password must be at least 5 characters long');
  });

  it('should return error when password does not have an uppercase letter', () => {
    const mockPassword = 'abcde';
    expect(validatePassword(mockPassword)).toEqual(
      'Password must contain at least one uppercase letter'
    );
  });

  it('should return error when password does not have a number', () => {
    const mockPassword = 'abCde';
    expect(validatePassword(mockPassword)).toEqual('Password must contain at least one number');
  });
});
