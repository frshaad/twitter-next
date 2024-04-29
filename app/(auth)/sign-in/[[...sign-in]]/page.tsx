import { SignIn } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';

import AuthUI from '@/components/auth-ui';

export default function SignInPage() {
  return (
    <AuthUI>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-[#1DA1F2]',
          },
          baseTheme: neobrutalism,
        }}
      />
    </AuthUI>
  );
}
