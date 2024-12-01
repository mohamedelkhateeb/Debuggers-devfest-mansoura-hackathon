'use server';
import { Data, Response } from '@/types/Response';
import ReqHeaders from '@/utils/config';
import Fetcher from './Fetcher';
import apiService from './apiService';
import { Vehicle } from '@/types/models/vehicle.model';

const ROUTE = '/vehicles';
export const getVehiclesdd = async (params: any, search?: string | null) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/vehicles/all${search ? `?query=${search}` : ''}`, {
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
export const getVehicles = async (params: any, search?: string | null) => {
  const response: Response<any> = await Fetcher<any>(`${ROUTE}/all?${params}`, {});
  return response?.Data;
};
export const getVehicle = async (id: string) => {
  const response: Response<Data<Vehicle>> = await Fetcher<any>(`${ROUTE}/${id}`, {});
  return response?.Data;
};

export const createVehicle = async (data: any) => {
  const result: Response<any> = await apiService.post(ROUTE, '/add-device', data);
  console.log(result);
  return result;
};
export const updateVehicle = async (data: any) => {
  const result: Response<Vehicle> = await apiService.put(ROUTE, '/update', data);
  return result;
};

export const createSensor = async (data: any) => {
  const result: Response<any> = await apiService.post('/sensors', '/add', data);
  console.log(result);
  return result;
};
export const getSensors = async (id: string) => {
  const response: Response<any> = await Fetcher<any>(`/sensors/${id}/all`, {});
  return response?.Data;
};
export const getSensor = async (id: string) => {
  const response: Response<Data<Vehicle>> = await Fetcher<any>(`${ROUTE}/${id}`, {});
  return response?.Data;
}

export const getSensorParams = async () => {
  const response: Response<any> = await Fetcher<any>(`/params/all`, {});
  return response?.Data;
};
export const getSensorEventCodes = async () => {
  const response: Response<any> = await Fetcher<any>(`/event-code/all`, {});
  return response?.Data;
};
