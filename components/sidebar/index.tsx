import AuthButtons from './auth-buttons';
import Logo from './logo';
import Navbar from './navbar';
import UserButton from './user-button';

export default function SideBar() {
  const isUserLoggedIn = true;

  return (
    <div className="sticky flex h-screen w-56 flex-col justify-between py-12">
      <Logo />
      <Navbar />
      {isUserLoggedIn ? <UserButton /> : <AuthButtons />}
    </div>
  );
}
