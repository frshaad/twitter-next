import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";

import { Button } from "../ui/button";

export default function Logo() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-14 rounded-full p-3"
      asChild
    >
      <Link href="/">
        <FaTwitter size={80} />
      </Link>
    </Button>
  );
}
