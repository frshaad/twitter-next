'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
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
    <form action={signup} className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-balance text-muted-foreground">
          Enter your information to create an account
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input
            id="full-name"
            placeholder="John Doe"
            {...register('name')}
            required
          />
          {errors.name?.message && (
            <ErrorMessage message={errors.name.message} />
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="@johndoe"
            {...register('username')}
            required
          />
          {errors.username?.message && (
            <ErrorMessage message={errors.username.message} />
          )}
        </div>
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
          Sign Up
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
        Already have an account?{' '}
        <Link href="/login" className="underline">
          Log In
        </Link>
      </div>
    </form>
  );
}
