import { useState } from 'react';

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import FooterSwitchForm from './footer-switch-form';
import LoginForm from './login-form';
import SignUpForm from './signup-form';

export default function AuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{isLoginForm ? 'Log In' : 'Sign Up'}</DialogTitle>
        <DialogDescription>
          {isLoginForm
            ? 'Enter your email below to login to your account'
            : 'Enter your information to create an account'}
        </DialogDescription>
      </DialogHeader>
      {isLoginForm ? <LoginForm /> : <SignUpForm />}
      <DialogFooter>
        {isLoginForm ? (
          <FooterSwitchForm switchFn={setIsLoginForm} />
        ) : (
          <FooterSwitchForm switchFn={setIsLoginForm} type="signup" />
        )}
      </DialogFooter>
    </DialogContent>
  );
}
