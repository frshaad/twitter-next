import { Feather } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TweetButton() {
  return (
    <Dialog>
      <DialogTrigger className="w-full rounded-full bg-blue-400 p-4 text-blue-50 shadow-md transition duration-200 hover:scale-105 hover:bg-blue-500 hover:shadow-xl">
        <Feather />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
