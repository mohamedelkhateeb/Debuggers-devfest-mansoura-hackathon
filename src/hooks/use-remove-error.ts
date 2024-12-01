import { useState } from 'react';

export const useHandleChange = () => {
  const [errors, setErrors] = useState<any>({});
  const handleChange = (e: any) => {
    if (errors[e.target.name]) {
      setErrors((prev: any) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return { errors, setErrors, handleChange };
};
