import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

type Props = {
  type?: 'signIn' | 'signUp';
};

export default function RegisterButton({ type = 'signIn' }: Props) {
  const isSignInType = type === 'signIn';

  return (
    <Button
      asChild
      variant={isSignInType ? 'ghost' : 'secondary'}
      className="rounded-full font-medium text-blue-400 hover:text-blue-400"
    >
      <Link
        href={isSignInType ? '/sign-in' : '/sign-up'}
        className="font-medium"
      >
        {isSignInType ? 'Log In' : 'Sign Up'}
      </Link>
    </Button>
  );
}
