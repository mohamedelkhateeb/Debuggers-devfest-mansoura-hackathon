import { Customer, CustomerCreateDistributerModel } from '@/types/models/customer.model';
import { useState } from 'react';
import { DEFAULT_CUSTOMER } from '../config/customerDefaultValues';
import { createCustomer } from '@/services/api/customerService';
import { transformForApi } from '../helpers/customer-transformations';
import toast from 'react-hot-toast';
import { useRouter } from '@/i18n/routing';

export const useCustomerActions = (initialData: Customer, customerType: string | string[] = 'new') => {
  const router = useRouter();
  const [errors, setErrors] = useState<any>({});
  const [data, setData] = useState<Customer>({ ...DEFAULT_CUSTOMER, ...initialData });
  const handleChange = (e: any) => {
    if (errors[e.target.name]) {
      setErrors((prev: any) => ({ ...prev, [e.target.name]: undefined }));
    }
  };
  const handleSubmit = async (state: any, formData: FormData) => {
    const objectedData = Object.fromEntries(formData);
    console.log(objectedData);

    const dataToSubmit = transformForApi({ ...data, ...objectedData });
    const response = await createCustomer(dataToSubmit, customerType == 'distributer' ? '/distributer' : '');
    console.log(response);
    console.log(Object.fromEntries(dataToSubmit));
    if (response.Success) {
      toast.success('Customer created successfully');
      router.push('/customers');
    } else {
      toast.error(response.Message || 'Something went wrong, please try again later');
    }
  };
  return {
    data,
    setData,
    errors,
    handleChange,
    setErrors,
    handleSubmit,
  };
};
