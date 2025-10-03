import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          SpaceX Launches
        </h1>
        
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            src="https://tenor.com/embed/1901080034090961183" 
            width="498" 
            height="498" 
            style={{ maxWidth: '100%', margin: '0 auto', display: 'block' }}
            frameBorder="0" 
            allowFullScreen
          />
        </div>

        <p className="text-xl text-gray-300">
          Explore the complete catalog of SpaceX rocket launches
        </p>

        <Link href="/launches">
          <Button size="lg" className="text-lg px-8 py-6">
            View All Launches 🚀
          </Button>
        </Link>
      </div>
    </div>
  );
}