import Image from 'next/image';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/abstract.jpg"
          alt="Image"
          width="900"
          height="900"
          className="h-full w-full object-cover dark:brightness-[0.8]"
        />
      </div>
    </div>
  );
}
