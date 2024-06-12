'use server';

import bcrypt from 'bcryptjs';

import prisma from '@/lib/db';
import { signUpSchema } from '@/lib/zod';

export default async function signup(formData: FormData) {
  const data = Object.fromEntries(formData);

  try {
    const parsedData = await signUpSchema.parseAsync(data);
    const { name, username, email, password } = parsedData;

    // Check if the email is already in use
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { message: 'Email is already in use' };
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        username,
        hashedPassword,
        name,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
}
