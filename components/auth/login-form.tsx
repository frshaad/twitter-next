'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

import { logIn } from '@/actions/login-form.action';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoginInputs, logInSchema } from '@/lib/zod';

import ErrorMessage from './error-message';

export default function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form action={logIn} className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            required
          />
          {errors.email?.message && (
            <ErrorMessage message={errors.email.message} />
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="********"
            {...register('password')}
            required
          />
          {errors.password?.message && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>
        <Button type="submit" className="mb-8 w-full" disabled={isSubmitting}>
          Login
        </Button>
        <Button variant="outline" className="flex w-full items-center gap-4">
          <FaGoogle />
          Continue with Google
        </Button>
        <Button variant="outline" className="flex w-full items-center gap-4">
          <FaGithub />
          Continue with Github
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );
}
