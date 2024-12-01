'use server';
import { Data, Response } from '@/types/Response';
import Fetcher from './Fetcher';
import { User } from '@/types/models/user.model';
import apiService from './apiService';
import { revalidateTag } from 'next/cache';

const ROUTE = '/users';
export const getUsers = async (params: string, search: string | null) => {
  const response: Response<Data<User>> = await Fetcher<any>(`${ROUTE}/${search ? `search?query=${search}` : `all?${params}`}`, {
    next: { tags: [ROUTE] },
  });
  return response?.Data;
};
export const getUserPermissions = async (userId: string) => {
  console.log(`/permissions/${userId}`);
  const response: any = await Fetcher<any>(`/permissions/${userId}/user-permissions`, {
    next: { tags: [ROUTE] },
  });
  return response;
};
export const getUser = async (id: string) => {
  const response: Response<any> = await Fetcher<any>(`${ROUTE}/${id}`, {});
  return response?.Data;
};
export const createUser = async (data: any, userType: string | string[]) => {
  const response = await apiService.post(ROUTE, userType != 'new' ? `/${userType}` : '', data);
  return response;
};
export const deleteUser = async (id: string) => {
  const response = await apiService.delete(ROUTE, `/${id}/delete`);
  return response;
};
export const getGroupUsers = async (params: string, search: string | null, CustomerId: any = '') => {
  const response: Response<User[]> = await Fetcher<any>(`${'group-users/all/'}${CustomerId}`, {
    next: { tags: ['/group-users'] },
  });
  return response?.Data;
};
export const createGroupUsers = async (data: any) => {
  console.log();

  const response = await apiService.post('/group-users', '/create', data);
  return response;
};
export const addUserToGroup = async (data: any) => {
  const response = await apiService.post('/group-users', '/add-user', data);
  return response;
};
export const removeUserFromGroup = async (data: any) => {
  console.log({ data });

  const response: Response<any> = await Fetcher<any>(`group-users/remove-user?GroupId=${data.groupId}&UserId=${data.userId}`, {});
  revalidateTag('/group-users');
  return response;
};
export const getGroupAdmins = async () => {
  const response: Response<any> = await Fetcher<any>(`${ROUTE}/group-admin?PageNumber=1&PageSize=1000`, {});
  return response?.Data;
};
export const permissionActions = async (type: string, data: any) => {
  if (type == 'add') type = 'add-to-user';
  if (type == 'remove') type = 'remove-from-user';
  if (type == 'temp') type = 'permission-temporary';
  const response = await apiService.post('/permissions', `/${type}`, data);
  return response;
};
