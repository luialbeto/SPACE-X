'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@apollo/client/react';
import { gql, OperationVariables } from '@apollo/client';
import LaunchCard from '@/components/molecules/launch-card';
import { Skeleton } from '@/components/ui/skeleton';

const LAUNCHES_QUERY = gql`
  query Launches($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
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

interface Launch {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
  };
  links: {
    flickr_images: string[];
  };
}

interface LaunchesData {
  launchesPast: (Launch | null)[];
}

export default function LaunchesPage() {
  const [offset, setOffset] = useState(50);
  const { ref, inView } = useInView();
  const { data, loading, fetchMore } = useQuery<LaunchesData>(LAUNCHES_QUERY, {
    variables: { limit: 20, offset: 50 },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (inView && data) {
      fetchMore({
        variables: { offset: offset + 20 },
        updateQuery: (prev: LaunchesData, { fetchMoreResult }: { fetchMoreResult?: LaunchesData; variables: OperationVariables }) => {
          if (!fetchMoreResult) return prev;
          setOffset(prevOffset => prevOffset + 20);
          
          const prevLaunches = prev.launchesPast.filter((l: Launch | null): l is Launch => l != null);
          const newLaunches = fetchMoreResult.launchesPast.filter((l: Launch | null): l is Launch => l != null);
          
          return {
            ...prev,
            launchesPast: [...prevLaunches, ...newLaunches],
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
        {data?.launchesPast?.filter((launch: Launch | null): launch is Launch => launch != null).map((launch: Launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
      {inView && <div ref={ref} className="h-10 flex justify-center"><Skeleton className="w-32 h-4" /></div>}
    </div>
  );
}