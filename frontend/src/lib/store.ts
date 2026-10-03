import { create } from 'zustand';

interface UIState {
  sidebarOpen: boolean;
  selectedCompanyId: string | null;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setSelectedCompanyId: (id: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  selectedCompanyId: null,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setSelectedCompanyId: (id) => set({ selectedCompanyId: id }),
}));
