// store/paginationStore.ts
import {create} from 'zustand';

interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalResults: number;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
  setTotalResults: (total: number) => void;
}

export const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 1,
  pageSize: 10,
  totalResults: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
  setPageSize: (size) => set({ pageSize: size }),
  setTotalResults: (total) => set({ totalResults: total }),
}));
