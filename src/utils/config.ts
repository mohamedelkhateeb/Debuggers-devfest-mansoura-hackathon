'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
const ReqHeaders = async (keys?: any) => {
  const session = await getServerSession(options);
  if (session) {
    return {
      Authorization: `Bearer ${session.user.token}`,
      ...keys,
    };
  }
};

export default ReqHeaders;
