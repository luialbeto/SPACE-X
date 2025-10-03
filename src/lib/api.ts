import { gql } from 'graphql-tag';
import { client } from './apollo-client';

const LAUNCHES_QUERY = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
    }
  }
`;

type Launch = {
  id: string;
  mission_name: string;
};

type LaunchesQuery = {
  launches: Launch[];
};

export async function fetchLaunches(limit: number = 5): Promise<Launch[]> {
  const { data } = await client.query<LaunchesQuery>({
    query: LAUNCHES_QUERY,
    variables: { limit },
  });
  if (!data) {
    throw new Error('Failed to fetch launches');
  }
  return data.launches;
}