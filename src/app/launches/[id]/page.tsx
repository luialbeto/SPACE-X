'use client';

import { Suspense } from 'react';
import LaunchDetails from '@/components/organisms/launch-details';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const LAUNCH_DETAILS_QUERY = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      description
      launch_date_local
      launch_success
      rocket {
        rocket_name
        rocket_type  # Fixed: Removed 'id' and 'description' (not on LaunchRocket)
      }
      links {
        flickr_images
        video_link
        wikipedia
        article_link
      }
    }
    rocket(id: $id) {  # Full Rocket type (has 'id', etc.)
      id
      name
      type
      description
      wikipedia
      flickr_images
    }
  }
`;

function LaunchDetailContent({ id }: { id: string }) {
  const { data, loading, error } = useQuery(LAUNCH_DETAILS_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data?.launch) return <p>Launch not found.</p>;

  return <LaunchDetails launch={data.launch} rocket={data.rocket} />;
}

export default function LaunchDetailsPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Skeleton className="w-full h-screen" />}>
      <LaunchDetailContent id={params.id} />
    </Suspense>
  );
}