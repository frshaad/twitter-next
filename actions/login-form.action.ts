'use server';

import { signIn } from '@/auth';

export async function logIn(formData: FormData) {
  await signIn('credentials', formData);
}
