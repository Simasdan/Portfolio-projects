import { UserData } from '../api/apiModel';

export function validateEmail(email: string): string {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === '') {
    return 'Please fill in the email field';
  }
  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
}

export function validateUsername(username: string): string {
  if (username.trim() === '') {
    return 'Please fill in the username field';
  }
  return '';
}

export function validatePassword(password: string): string {
  if (password.trim() === '') {
    return 'Please fill in the password field';
  }
  if (password.length < 5) {
    return 'Password must be at least 5 characters long';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }
  if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  }
  return '';
}

export function validateRepeatPassword(repeatPassword: string, password: string): string {
  if (repeatPassword.trim() === '') {
    return 'Please repeat your password';
  }
  if (repeatPassword !== password) {
    return 'Passwords do not match';
  }
  return '';
}

export function validateUniqueEmail(email: string, data: UserData[]) {
  if (data.some((user) => user.email === email)) {
    return 'User with this email already exists';
  }
  return '';
}
