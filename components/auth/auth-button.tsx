'use client';

import { UserRound } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import AuthForm from './auth-form';

export default function AuthButton() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-3" asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <UserRound />
        </Button>
      </DialogTrigger>
      <AuthForm />
    </Dialog>
  );
}
