import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export const useClientFetch = (endpoint: string) => {
  const { data: session } = useSession();
  const [Data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!session?.user?.token) return;
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/${endpoint}`, {
          method: 'GET',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.user.token}` },
        });
        const result = await res.json();
        setData(result?.Data?.Data);
      } catch (err) {
        setError('Failed to fetch data');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint, session]);
  return { Data, isLoading, error };
};
export const useClientPost = (endpoint: string, data: any) => {
  const { data: session } = useSession();
  const [Data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!session?.user?.token) return;
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/${endpoint}`, {
          body: JSON.stringify(data),
          method: 'POST',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.user.token}` },
        });
        const result = await res.json();
        console.log(result);
        
        setData(result?.Data?.Data);
      } catch (err) {
        setError('Failed to fetch data');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint, session]);

  return { Data, isLoading, error };
};
