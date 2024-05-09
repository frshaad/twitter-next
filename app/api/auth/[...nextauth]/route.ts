import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import prisma from '@/lib/prismadb';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid Email or Password');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        );

        if (!isPasswordCorrect) {
          throw new Error('Incorrect Password');
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  session: { strategy: 'jwt' },
  // jwt: { secret: process.env.NEXTAUTH_JWT_SECRET },
});

export { handler as GET, handler as POST };
