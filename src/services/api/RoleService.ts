'use server';
import { Data, Response } from '@/types/Response';
import Fetcher from './Fetcher';
import apiService from './apiService';
import { Role } from '@/types/models/role.model';

const ROUTE = '/roles';
export const getRoles = async (params?: string) => {
  const response: Response<Data<Role>> = await Fetcher<any>(`${ROUTE}`, {
    next: { revalidate: 60, tags: [ROUTE] },
  });
  return response?.Data;
};
export const getPermissions = async () => {
  const response: Response<Data<Role>> = await Fetcher<any>(`permissions`, {
    next: { revalidate: 60, tags: ['permissions'] },
  });
  return response?.Data;
};
