import { Dispatch, SetStateAction } from 'react';

import { Button } from '@/components/ui/button';

type FooterSwitchFormProps = {
  switchFn: Dispatch<SetStateAction<boolean>>;
  type?: 'login' | 'signup';
};

export default function FooterSwitchForm({
  switchFn,
  type = 'login',
}: FooterSwitchFormProps) {
  return (
    <p className="flex items-center">
      {type === 'login' ? "Don't have an account?" : 'Already have an account?'}
      <Button variant="link" onClick={() => switchFn((prev) => !prev)}>
        {type === 'login' ? 'Sign Up' : 'Log In'}
      </Button>
    </p>
  );
}
