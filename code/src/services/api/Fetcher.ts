import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const Fetcher = async <T>(endpoint: string, opt: FetchOptions = {}) => {
  try {
    const session = await getServerSession(options);
    const TOKEN = session?.user.token;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (TOKEN) {
      headers['Authorization'] = `Bearer ${TOKEN}`;
    }
    const url = `${API_BASE_URL}api/v1/${endpoint}`;
    const response = await fetch(url, {
      next: { revalidate: 0 },
      ...opt,
      headers,
    });
    const data = await response.json().catch(() => {
      return {
        message: 'Failed Request',
        statusCode: response.status,
        statusText: response.statusText,
        Data: null,
        success: response.ok,
        url: response.url,
      };
    });
    return data;
  } catch (error) {
    console.error(error);
    // throw error;
  }
};

export default Fetcher;
