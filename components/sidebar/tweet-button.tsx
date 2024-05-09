import { PenLine } from 'lucide-react';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import TweetBox from './tweet-box';

export default function TweetButton() {
  return (
    <Dialog>
      <DialogTrigger className="w-full rounded-full bg-blue-400 p-4 text-blue-50 shadow-md transition duration-200 hover:scale-105 hover:bg-blue-500 hover:shadow-xl">
        <PenLine />
      </DialogTrigger>
      <TweetBox />
    </Dialog>
  );
}
