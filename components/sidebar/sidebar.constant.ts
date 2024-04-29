import { Bell, Home, LucideIcon, UserRound } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export type TNavLink = {
  id: string;
  name: string;
  icon: LucideIcon;
  href: string;
};

export const NAV_LINKS: TNavLink[] = [
  {
    id: uuidv4(),
    name: "home",
    icon: Home,
    href: "/",
  },
  {
    id: uuidv4(),
    name: "notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    id: uuidv4(),
    name: "profile",
    icon: UserRound,
    href: "/profile",
  },
];
