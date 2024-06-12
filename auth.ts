import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { ZodError } from 'zod';

import prisma from '@/lib/db';
import { logInSchema } from '@/lib/zod';

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await logInSchema.parseAsync(credentials);

          if (!email || !password) {
            throw new Error('Invalid credentials');
          }

          const user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user || !user.hashedPassword) {
            throw new Error('User not found.');
          }

          const isPasswordCorrect = await bcrypt.compare(
            password,
            user.hashedPassword,
          );

          if (!isPasswordCorrect) {
            throw new Error('Password is incorrect');
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
          return null;
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV !== 'production',
  trustHost: true,
});
