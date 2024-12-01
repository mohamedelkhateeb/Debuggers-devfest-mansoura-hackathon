'use server';
import { Data, Response } from '@/types/Response';
import apiService from './apiService';
import { Customer } from '@/types/models/customer.model';
import ReqHeaders from '@/utils/config';
import Fetcher from './Fetcher';
import { revalidateTag } from 'next/cache';

const ROUTE = '/customers';
export const getCustomers = async (params: any, search?: string | null) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/customers/companies_individuals`, {
    next: { revalidate: 0, tags: [ROUTE] },
    method: 'POST',
    headers: await ReqHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(params),
  });
  return await response.json().catch(() => {
    return {
      Message: 'Failed Request',
      StatusCode: response?.status,
      statusText: response?.statusText,
      Data: null,
      Success: response?.ok,
      url: response?.url,
    };
  });
};
export const getCustomer = async (id: string) => {
  const response: Response<any> = await Fetcher<any>(`${ROUTE}/${id}`, {});
  return response?.Data;
};
export const getPermissionsForCustomer = async (id: string) => {
  const response: Response<any> = await Fetcher<any>(`${'permissions'}/${id}`, {});
  return response?.Data;
};
export const createCustomer = async (data: FormData, customerType?: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/customers${customerType}`, {
      method: 'POST',
      cache: 'no-cache',
      body: data,
      headers: await ReqHeaders({}),
    });
    revalidateTag(ROUTE);
    return await response.json().catch(() => {
      return {
        Message: 'Failed Request',
        StatusCode: response?.status,
        statusText: response?.statusText,
        Data: null,
        Success: response?.ok,
        url: response?.url,
      };
    });
  } catch (error) {
    console.error(error);
  }
};
export const deleteCustomer = async (id: string) => {
  const response = await apiService.delete(ROUTE, `/${id}/delete`);
  return response;
};
export const changeStatusCustomer = async (id: string) => {
  const response = await apiService.delete(ROUTE, `/${id}/change-status`);
  return response;
};
