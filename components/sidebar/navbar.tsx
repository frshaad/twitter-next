"use client";

import { cn } from "@/lib/utils";

import NavLink from "./nav-link";
import SearchButton from "./search-button";
import { NAV_LINKS } from "./sidebar.constant";
import TweetButton from "./tweet-button";

type Props = {
  horizontal?: boolean;
};

export default function Navbar({ horizontal }: Props) {
  return (
    <nav
      className={cn(
        "flex w-fit justify-between rounded-full gap-1 border",
        horizontal ? "flex-row mx-auto" : "flex-col",
      )}
    >
      {NAV_LINKS.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
      <SearchButton />
      <TweetButton />
    </nav>
  );
}
