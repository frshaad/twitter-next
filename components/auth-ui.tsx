import { auth } from '@clerk/nextjs';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaTwitter } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

type Props = {
  children: React.ReactNode;
};

export default function AuthUI({ children }: Props) {
  const { session } = auth();
  if (session) {
    redirect('/');
  }

  return (
    <section>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative hidden h-32 items-end bg-gray-900 lg:col-span-5 lg:flex lg:h-full xl:col-span-6">
          <Image
            alt=""
            src={IMAGE_URL}
            className="absolute inset-0 size-full object-cover opacity-80"
            width={870}
            height={870}
            priority
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link href="/">
              <FaTwitter size={80} color="white" />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              <span className="font-normal">Welcome to</span> Twitter
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Fast-paced feed of short messages and news. Connect with
              like-minded people and share your thoughts in real-time
            </p>
          </div>
        </section>

        <main className="flex flex-col items-center justify-center space-y-6 p-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-96">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" /> Back to Home
              </Link>
            </Button>
          </div>
          {children}
        </main>
      </div>
    </section>
  );
}
