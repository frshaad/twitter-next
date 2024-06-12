import SideBar from '@/components/sidebar';
import TrendBar from '@/components/trendbar';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between gap-4 px-3">
      <SideBar />
      <main className="flex-[2]">{children}</main>
      <TrendBar />
    </div>
  );
}
