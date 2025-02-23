import { fetchData } from '../js/api.js';
import { jest } from '@jest/globals';

describe('fetchData', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('should fetch data correctly', async () => {
    const mockData = { items: [{ title: "Test Result" }] };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchData("test");
    expect(data).toEqual(mockData);
  });

  test('should throw an error on bad response', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(fetchData("test")).rejects.toThrow("HTTP error! Status: 404");
  });
});
