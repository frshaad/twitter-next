import AuthButton from '../auth/auth-button';
import Logo from './logo';
import Navbar from './navbar';
import UserButton from './user-button';

export default function SideBar() {
  const isUserLoggedIn = false;

  return (
    <div className="sticky flex h-screen w-56 flex-col justify-between py-12">
      <Logo />
      <Navbar />
      {isUserLoggedIn ? <UserButton /> : <AuthButton />}
    </div>
  );
}
