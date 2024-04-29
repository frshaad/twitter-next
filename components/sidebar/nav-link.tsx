"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { TNavLink } from "./sidebar.constant";

type NavLinkProps = {
  item: TNavLink;
};

export default function NavLink({ item }: NavLinkProps) {
  const pathname = usePathname();

  const { href, icon: Icon } = item;

  return (
    <Link
      href={href}
      className={cn(
        "w-full rounded-full p-4 transition duration-200 dark:hover:bg-blue-400 hover:bg-blue-50",
        pathname === href && "text-blue-400 dark:hover:text-blue-50",
      )}
    >
      <Icon />
    </Link>
  );
}
