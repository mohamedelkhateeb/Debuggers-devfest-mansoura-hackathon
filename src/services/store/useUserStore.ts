import { create } from 'zustand';
import { User } from '@/types/models/user.model';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
// Define types for the state
interface UserState {
  users: User[];
  error: string | null;
  isLoading: boolean;
  message: string | null;
  getUsers: (params?: string, search?: string | null) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  error: null,
  isLoading: false,
  message: null,
  getUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_URL}/api/v1/users/all`);
      const result = await response.json();
      set({ users: result, isLoading: false });
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Error signing up', isLoading: false });
      throw error;
    }
  },
}));
