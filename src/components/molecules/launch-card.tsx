import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLaunches } from '@/lib/context/launches-context';
import { Label } from '@/components/ui/label';

interface LaunchCardProps {
  launch: {
    id: string;
    mission_name: string;
    launch_date_local: string;
    launch_success: boolean;
    rocket: { rocket_name: string };
    links: { flickr_images: string[] };
  };
}

export default function LaunchCard({ launch }: LaunchCardProps) {
  const { favorites, toggleFavorite } = useLaunches();
  const isFavorite = favorites.includes(launch.id);
  const imageSrc = launch.links.flickr_images?.[0] || 'https://placehold.co/300x200?text=No+Image';

  return (
    <Link href={`/launches/${launch.id}`} className="block">
      <Card className="w-full cursor-pointer hover:shadow-lg transition-shadow">
        <CardHeader>
          <Image
            src={imageSrc}
            alt={launch.mission_name}
            width={300}
            height={200}
            className="rounded-md object-cover"
            unoptimized
            priority
          />
          <CardTitle>{launch.mission_name}</CardTitle>
          <CardDescription>
            {new Date(launch.launch_date_local).toLocaleDateString()} - {launch.rocket.rocket_name}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <p className="text-sm">Success: {launch.launch_success ? 'Yes' : 'No'}</p>
          <Button variant="ghost" size="sm" onClick={(e) => { e.preventDefault(); toggleFavorite(launch.id); }}>
            <Label>{isFavorite ? 'Remove' : 'Favorite'}</Label>
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}