'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type Props = {
  label: string;
  isBackArrowShown?: boolean;
};

export default function Header({ label, isBackArrowShown }: Props) {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <header className="p-5">
      <div className="mb-3 flex items-center gap-2">
        {isBackArrowShown && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="rounded-full"
          >
            <ArrowLeft />
          </Button>
        )}
        <h1 className="text-xl font-semibold">{label}</h1>
      </div>
      <Separator />
    </header>
  );
}
