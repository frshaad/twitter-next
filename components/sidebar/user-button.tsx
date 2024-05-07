'use client';

import { useRouter } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function UserButton() {
  const router = useRouter();
  const avatarSrc = 'https://github.com/frshaad.png';
  const avatarAlt = 'Farshad Hatami';
  const userNameChars = 'fh';
  const username = 'farshad';

  const handleGoToProfile = () => router.push('/frshaad');
  const handleLogOut = () => console.log('Logged Out!!!');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-fit outline-none">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={avatarAlt} />
          <AvatarFallback className="uppercase">{userNameChars}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>@{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleGoToProfile}
          className="cursor-pointer"
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogOut}
          className="cursor-pointer text-destructive"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
