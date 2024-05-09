import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';

import PrismaClient from '@/lib/prismadb';

const handler = NextAuth({
  providers: [],
});

export { handler as GET, handler as POST };
