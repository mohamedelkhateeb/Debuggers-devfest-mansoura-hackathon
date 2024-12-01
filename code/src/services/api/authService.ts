'use server';
export const signIn = async (credentials: { Email: string; Password: string }) => {
  console.log({ credentials });

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/authentication/login`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify({ Email: credentials.Email, Password: credentials.Password }),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const varifyResetPwdToken = async (data: { email: string; token: string }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/authentication/token-verify`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify({ Email: data.email, Token: data.token.replace(/ /g, '+') }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const forgotPassword = async (Email: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/authentication/forget-password?Email=${Email}`, {
      method: 'GET',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const resetPassword = async (credentials: { Email: string; Password: string; Token: string }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/authentication/reset-password`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify({ Email: credentials.Email, Password: credentials.Password, Token: credentials.Token.replace(/ /g, '+') }),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
