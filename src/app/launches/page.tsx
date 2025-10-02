'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import LaunchCard from '@/components/molecules/launch-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const LAUNCHES_QUERY = gql`
  query Launches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset, order: "last", sort: "launch_date_utc") {  # Fixed: Sort recent first for images
      id
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`;

export default function LaunchesPage() {
  const [offset, setOffset] = useState(0);
  const { ref, inView } = useInView();
  const { data, loading, fetchMore } = useQuery(LAUNCHES_QUERY, {
    variables: { limit: 10, offset: 0 },
  });

  useEffect(() => {
    if (inView && data) {
      fetchMore({
        variables: { offset: offset + 10 },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          setOffset(prevOffset => prevOffset + 10);
          return {
            launches: [...prev.launches, ...fetchMoreResult.launches],
          };
        },
      });
    }
  }, [inView, data, fetchMore, offset]);

  if (loading) return <Skeleton className="w-full h-64" />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Launches Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.launches.map((launch: any) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
      {inView && <div ref={ref} className="h-10 flex justify-center"><Skeleton className="w-32 h-4" /></div>}
    </div>
  );
}