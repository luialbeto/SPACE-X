'use client';

import { use, Suspense } from 'react';
import Link from 'next/link';
import LaunchDetails from '@/components/organisms/launch-details';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const LAUNCH_DETAILS_QUERY = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      launch_date_local
      launch_success
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        video_link
        wikipedia
        article_link
      }
    }
  }
`;

function LaunchDetailContent({ id }: { id: string }) {
  const { data, loading, error } = useQuery(LAUNCH_DETAILS_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('GraphQL Error:', error);
    return <p>Launch not found.</p>;
  }
  if (!data?.launch) return <p>Launch not found.</p>;

  const rocket = {
    name: data.launch.rocket.rocket_name,
    type: data.launch.rocket.rocket_type,
    description: '',
  };

  return (
    <div>
      <div className="container mx-auto p-4 max-w-4xl">
        <Link href="/launches">
          <Button variant="outline" className="mb-4">
            ← Back to Launches
          </Button>
        </Link>
      </div>
      <LaunchDetails launch={data.launch} rocket={rocket} />
    </div>
  );
}

export default function LaunchDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  return (
    <Suspense fallback={<Skeleton className="w-full h-screen" />}>
      <LaunchDetailContent id={id} />
    </Suspense>
  );
}