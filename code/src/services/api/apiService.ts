import Config from '@/utils/config';
import { revalidateTag } from 'next/cache';
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
type HttpMethod = 'POST' | 'PUT' | 'DELETE';
interface ApiService {
  request: <T>(method: HttpMethod, route: string, endpoint: string, bodyOrParams?: Record<string, unknown>) => Promise<T>;
  post: <TData, TResponse>(route: string, endpoint: string, body: Record<string, unknown>) => Promise<TResponse>;
  put: <TData, TResponse>(route: string, endpoint: string, body: Record<string, unknown>) => Promise<TResponse>;
  delete: <T>(route: string, endpoint: string) => Promise<T>;
}

const apiService: ApiService = {
  request: async <T>(method: HttpMethod, route: string, endpoint: string, body?: Record<string, unknown>) => {
    console.log(`${API_BASE_URL}api/v1${route}${endpoint}`);
    
    try {
      const response = await fetch(`${API_BASE_URL}api/v1${route}${endpoint}`, {
        cache: 'no-store',
        method,
        headers: await Config({ 'Content-Type': 'application/json' }),
        body: method !== 'DELETE' ? JSON.stringify(body) : undefined,
      });
      revalidateTag(route);
      const data = await response.json().catch(() => {
        return {
          Message: 'Failed Request',
          StatusCode: response?.status,
          statusText: response?.statusText,
          Data: null,
          Success: response?.ok,
          url: response?.url,
        };
      });
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
  post: async <T>(route: string, endpoint: string, body: Record<string, unknown>) => apiService.request<T>('POST', route, endpoint, body),
  put: async <T>(route: string, endpoint: string, body: Record<string, unknown>) => apiService.request<T>('PUT', route, endpoint, body),
  delete: async <T>(route: string, endpoint: string) => apiService.request<T>('DELETE', route, endpoint),
};

const handleError = (error: unknown) => {
  console.error('API call failed:', error instanceof Error ? error.message : error);
};

export default apiService;
