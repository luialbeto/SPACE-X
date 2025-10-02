import { fetchLaunches } from '@/lib/api';

describe('fetchLaunches', () => {
  it('fetches launches successfully', async () => {
    const launches = await fetchLaunches(5);
    expect(launches).toBeDefined();
    expect(Array.isArray(launches)).toBe(true);
    expect(launches.length).toBeGreaterThanOrEqual(0);
  });
});