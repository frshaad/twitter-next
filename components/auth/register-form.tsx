import { FaGithub, FaGoogle } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function RegisterForm() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First name</Label>
          <Input id="first-name" placeholder="John" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" placeholder="Doe" required />
        </div>
      </div>
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
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <Button type="submit" className="w-full">
        Create an account
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
