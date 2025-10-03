import { gql } from 'graphql-tag';
import { client } from './apollo-client';

const LAUNCHES_QUERY = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_success
      details
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        mission_patch
        mission_patch_small
        video_link
        wikipedia
        article_link
      }
    }
  }
`;

export async function fetchLaunches(limit: number = 50) {
  const { data } = await client.query({
    query: LAUNCHES_QUERY,
    variables: { limit },
  });
  return data.launches;
}