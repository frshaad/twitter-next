import AuthRedirectButton from './auth-redirect-button';
import Logo from './logo';
import Navbar from './navbar';

export default function SideBar() {
  return (
    <div className="sticky flex h-screen w-56 flex-col justify-between py-12">
      <Logo />
      <Navbar />
      {/* <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <AuthRedirectButton />
      </SignedOut> */}
    </div>
  );
}
