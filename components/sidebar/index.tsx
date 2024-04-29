import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import AuthRedirectButton from "./auth-redirect-button";
import Logo from "./logo";
import Navbar from "./navbar";

export default function SideBar() {
  return (
    <div className="sticky flex h-screen w-56 flex-col justify-between py-6">
      <Logo />
      <Navbar />
      <SignedIn>
        <div className="size-8">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <AuthRedirectButton />
      </SignedOut>
    </div>
  );
}
