import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SpaceX Launches Portal</h1>
      <p className="mt-4">Explore SpaceX missions.</p>
      <Button asChild className="mt-6">
        <Link href="/launches">View Launches</Link>
      </Button>
    </main>
  );
}