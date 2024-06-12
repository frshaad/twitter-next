import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

import signup from '@/actions/signup-fom.action';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignUpInputs, signUpSchema } from '@/lib/zod';

import ErrorMessage from './error-message';

export default function SignUpForm() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  });

  return (
    <section className="grid gap-4">
      <form action={signup} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="John Doe" {...register('name')} />
            {errors.name?.message && (
              <ErrorMessage message={errors.name.message} />
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="johndoe"
              {...register('username')}
            />
            {errors.username?.message && (
              <ErrorMessage message={errors.username.message} />
            )}
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
          />
          {errors.email?.message && (
            <ErrorMessage message={errors.email.message} />
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register('password')} />
          {errors.password?.message && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          Create an account
        </Button>
      </form>

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
    </section>
  );
}
