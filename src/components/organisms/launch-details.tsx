'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const LaunchVideo = dynamic(() => import('@/components/molecules/launch-video'), { ssr: false });

interface Rocket {
  name: string;
  type: string;
  description: string;
}

interface Launch {
  mission_name: string;
  details: string;
  launch_date_local: string;
  launch_success: boolean;
  links?: {
    flickr_images?: string[];
    video_link?: string;
    wikipedia?: string;
    article_link?: string;
  };
}

interface LaunchDetailsProps {
  launch: Launch;
  rocket: Rocket;
}

export default function LaunchDetails({ launch, rocket }: LaunchDetailsProps) {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{launch.mission_name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-4">
          <p>{launch.details}</p>
          <p>Date: {new Date(launch.launch_date_local).toLocaleString()}</p>
          <p>Success: {launch.launch_success ? 'Yes' : 'No'}</p>
          <h3 className="font-bold">Rocket: {rocket.name} ({rocket.type})</h3>
          <p>{rocket.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {launch.links?.flickr_images?.map((img: string, i: number) => (
              <Image key={i} src={img} alt={`Launch image ${i}`} width={400} height={300} className="rounded-md object-cover" loading="lazy" />
            ))}
          </div>
          {launch.links?.video_link && <LaunchVideo videoLink={launch.links.video_link} />}
          <div className="space-x-4">
            {launch.links?.wikipedia && <a href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer" className="underline">Wikipedia</a>}
            {launch.links?.article_link && <a href={launch.links.article_link} target="_blank" rel="noopener noreferrer" className="underline">Article</a>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}