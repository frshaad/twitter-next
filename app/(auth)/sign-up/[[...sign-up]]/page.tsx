import { SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

import AuthUI from "@/components/auth-ui";

export default function SignUpPage() {
  return (
    <AuthUI>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-[#1DA1F2]",
          },
          baseTheme: neobrutalism,
        }}
      />
    </AuthUI>
  );
}
