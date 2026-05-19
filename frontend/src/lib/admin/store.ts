import { create } from 'zustand';

interface AdminState {
  user: any | null;
  setUser: (user: any) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
