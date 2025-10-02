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

export async function fetchLaunches(limit: number = 5) {
  const { data } = await client.query({
    query: LAUNCHES_QUERY,
    variables: { limit },
  });
  return data.launches;
}