const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.ktv-asset.com/';
const AUTHOR_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || '';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const customFetch = async (url: string, options: FetchOptions = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'x-agent-key': AUTHOR_TOKEN,
        Origin: window.location.origin,
        ...options.headers,
      },
    });

    if (response.status === 401) {
      const errorData = { message: 'Unauthorized', status: 401 };
      return errorData;
    }

    const contentType = response.headers.get('Content-Type');
    let responseBody;

    if (contentType && contentType.includes('application/json')) {
      responseBody = await response.json();
    } else {
      responseBody = await response.text();
    }

    return responseBody;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
