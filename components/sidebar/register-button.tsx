import { LogIn, UserRoundPlus } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../ui/button';

type Props = {
  type?: 'signIn' | 'signUp';
};

export default function RegisterButton({ type = 'signIn' }: Props) {
  const isSignInType = type === 'signIn';

  return (
    <Button
      asChild
      variant={isSignInType ? 'ghost' : 'ghost'}
      className="rounded-full font-medium text-blue-400 hover:text-blue-400"
    >
      <Link
        href={isSignInType ? '/sign-in' : '/sign-up'}
        className="flex items-center gap-3 font-medium"
      >
        {isSignInType ? (
          <>
            <LogIn size={18} />
            Log In
          </>
        ) : (
          <>
            <UserRoundPlus size={18} />
            Sign Up
          </>
        )}
      </Link>
    </Button>
  );
}
