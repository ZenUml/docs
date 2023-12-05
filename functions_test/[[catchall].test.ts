import { vi, it, describe, expect, beforeEach, afterEach } from 'vitest';
import { onRequest } from '../functions/[[catchall]]';

describe('onRequest', () => {
  let mockFetch;
  let mockResponse;
  let event;

  beforeEach(() => {
    mockResponse = {
      text: vi.fn().mockResolvedValue('https://sequence-diagram.zenuml.com'),
      arrayBuffer: vi.fn().mockResolvedValue(new ArrayBuffer(8)),
      headers: new Headers(),
      status: 200,
      statusText: 'OK',
    };
    mockFetch = vi.fn().mockResolvedValue(mockResponse);
    global.fetch = mockFetch;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  const testCases = [
    { browserUrl: '/sequence-diagram', serverUrl: '/' },
    { browserUrl: '/sequence-diagram/embed', serverUrl: '/embed' },
    { browserUrl: '/sequence-diagram/share/xxx', serverUrl: '/share/xxx' },
    { browserUrl: '/diagrams/xxx', serverUrl: '/diagrams/xxx' },
    { browserUrl: '/fonts/xxx', serverUrl: '/fonts/xxx' },
    { browserUrl: '/vendor/xxx', serverUrl: '/vendor/xxx' },
    { browserUrl: '/image/xxx', serverUrl: '/image/xxx' }, // future case
    { browserUrl: '/login', serverUrl: '/login' },
    { browserUrl: '/auth/xxx', serverUrl: '/auth/xxx' },
    { browserUrl: '/public-diagrams', serverUrl: '/public-diagrams' }, // future case
  ];

  testCases.forEach(({ browserUrl, serverUrl }) => {
    it(`should map ${browserUrl} to ${serverUrl}`, async () => {
      event = {
        request: new Request(`https://zenuml.com${browserUrl}`),
        env: { LARASITE_DOMAIN: 'seq-dia.zenuml.com' },
      };
      await onRequest(event);
      expect(mockFetch).toHaveBeenCalledWith(
        new URL(`https://seq-dia.zenuml.com${serverUrl}`),
        event.request,
      );
    });
  });

  it('should replace URLs in text responses', async () => {
    mockResponse.headers.set('content-type', 'text/html');
    event = {
      request: new Request('https://example.com/sequence-diagram'),
      env: { LARASITE_DOMAIN: 'sequence-diagram.zenuml.com' },
    };
    const response = await onRequest(event);
    const responseData = await response.text();
    expect(responseData).not.toContain('https://sequence-diagram.zenuml.com');
    expect(responseData).toBe('https://example.com');
  });
});
