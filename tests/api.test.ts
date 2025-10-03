import { fetchLaunches } from '@/lib/api';
import { client } from '@/lib/apollo-client';

jest.mock('@/lib/apollo-client', () => ({
  client: {
    query: jest.fn(),
  },
}));

describe('fetchLaunches', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches launches successfully', async () => {
    const mockLaunches = [
      { id: '1', mission_name: 'FalconSat' },
      { id: '2', mission_name: 'DemoSat' },
      { id: '3', mission_name: 'Trailblazer' },
      { id: '4', mission_name: 'RatSat' },
      { id: '5', mission_name: 'RazakSat' },
    ];

    (client.query as jest.Mock).mockResolvedValue({
      data: { launches: mockLaunches },
    });

    const launches = await fetchLaunches(5);

    expect(launches).toBeDefined();
    expect(Array.isArray(launches)).toBe(true);
    expect(launches.length).toBe(5);
    expect(launches).toEqual(mockLaunches);
  });

  it('handles empty response', async () => {
    (client.query as jest.Mock).mockResolvedValue({
      data: { launches: [] },
    });

    const launches = await fetchLaunches(5);

    expect(launches).toBeDefined();
    expect(Array.isArray(launches)).toBe(true);
    expect(launches.length).toBe(0);
  });

  it('handles API errors gracefully', async () => {
    (client.query as jest.Mock).mockRejectedValue(
      new Error('Network error')
    );

    await expect(fetchLaunches(5)).rejects.toThrow('Network error');
  });
});