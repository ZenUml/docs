import { vi, it, describe, expect, beforeEach, afterEach } from 'vitest';
import { onRequest } from '../functions/[[catchall]]';

describe('onRequest', () => {
  let mockFetch;
  let mockResponse;
  let event;

  beforeEach(() => {
    mockResponse = {
      text: vi.fn().mockResolvedValue('mock text'),
      arrayBuffer: vi.fn().mockResolvedValue(new ArrayBuffer(8)),
      headers: new Headers(),
      status: 200,
      statusText: 'OK',
    };
    mockFetch = vi.fn().mockResolvedValue(mockResponse);
    global.fetch = mockFetch;

    event = {
      request: new Request('https://example.com/sequence-diagram'),
      env: { LARASITE_DOMAIN: 'sequence-diagram.zenuml.com' },
    };
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should call fetch with the correct URL', async () => {
    await onRequest(event);
    expect(mockFetch).toHaveBeenCalledWith(
      new URL('https://sequence-diagram.zenuml.com'),
      event.request,
    );
  });

  it('should replace URLs in text responses', async () => {
    mockResponse.headers.set('content-type', 'text/html');
    const response = await onRequest(event);
    const responseData = await response.text();
    expect(responseData).not.toContain('https://sequence-diagram.zenuml.com');
    expect(responseData).toBe('mock text');
  });
});
