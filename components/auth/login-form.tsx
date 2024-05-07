import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link href="#" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
        </div>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      <div className="flex items-center justify-between gap-3">
        <Button variant="outline" className="flex w-full items-center gap-2">
          <FaGoogle />
          Google
        </Button>
        <Button variant="outline" className="flex w-full items-center gap-2">
          <FaGithub />
          GitHub
        </Button>
      </div>
    </div>
  );
}
